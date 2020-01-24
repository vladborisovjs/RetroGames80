import { Component, OnInit } from '@angular/core';
import {NeonSnakeService} from "../services/neon-snake.service";
import {LocalstorageService} from "../../shared/services/localstorage.service";

@Component({
  selector: 'app-neon-snake',
  templateUrl: './neon-snake.component.html',
  styleUrls: ['./neon-snake.component.scss']
})
export class NeonSnakeComponent implements OnInit {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private readonly box: number = 25;
  private direction: string;
  private score: number;
  private highScore;
  private snake: any[] = [];
  private xSnake: number;
  private ySnake: number;
  private food: any;
  private fruits: any[];
  private randomFriut: any;
  private head: HTMLImageElement;
  private body: HTMLImageElement;
  private tail: HTMLImageElement;
  private xShift: number;
  private yShift: number;
  constructor(private nss: NeonSnakeService, private localStorageService: LocalstorageService) { }

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
    this.context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth - 50;
    this.canvas.height = window.innerHeight - 72; // todo убрать костыль
    this.score = 0;
    this.highScore = localStorage.getItem('neonSnakeHighScore') || 0;
    this.fruits = [
      this.nss.appleItem,
      this.nss.orangeItem,
      this.nss.cherryItem,
      this.nss.strawberryItem,
      this.nss.bananaItem,
      this.nss.pineappleItem
    ];
    this.food = {
      x :Math.floor(Math.random()*35 + 5) * this.box,
      y :Math.floor(Math.random()*16 + 3) * this.box
    };
    this.randomFriut = this.fruits[Math.floor(Math.random() * this.fruits.length)];
    this.snake[0] = {
      x: 9 * this.box,
      y: 10 * this.box
    };
    this.xSnake = this.snake[0].x;
    this.ySnake = this.snake[0].y;
    this.head = this.nss.headSnakeRight;
    this.createUserEvents();
    this.drawMainGame();
  }

  drawMainGame() {
    this.context.drawImage(this.nss.gridBackground,0,0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.randomFriut, this.food.x, this.food.y);
    this.eatFood();
    this.createNewGame();
    this.drawSnake();
    this.drawScore();
    this.drawHighScore();
    this.moveSnake();
    this.saveHighScore();
    window.requestAnimationFrame(() => this.drawMainGame());
  }

  createUserEvents() {
    document.addEventListener('keydown', (event) => {
      let key = event.code;
      if (key === 'ArrowLeft' && this.direction != "RIGHT") {
        this.direction = "LEFT";
        this.nss.leftSound.play();
        this.head = this.nss.headSnakeLeft;
        this.body = this.nss.bodySnakeHorizontal;
        this.tail = this.nss.tailSnakeRight;
        this.xShift = 35;
        this.yShift = 0;
      } else if (key === 'ArrowUp' && this.direction != "DOWN") {
        this.direction = "UP";
        this.nss.upSound.play();
        this.head = this.nss.headSnakeUp;
        this.body = this.nss.bodySnakeVertical;
        this.tail = this.nss.tailSnakeDown;
        this.xShift = 0;
        this.yShift = 35;
      } else if (key === 'ArrowRight' && this.direction != "LEFT") {
        this.direction = "RIGHT";
        this.nss.rightSound.play();
        this.head = this.nss.headSnakeRight;
        this.body = this.nss.bodySnakeHorizontal;
        this.tail = this.nss.tailSnakeLeft;
        this.xShift = -35;
        this.yShift = 0;
      } else if (key === 'ArrowDown' && this.direction != "UP") {
        this.direction = "DOWN";
        this.nss.downSound.play();
        this.head = this.nss.headSnakeDown;
        this.body = this.nss.bodySnakeVertical;
        this.tail = this.nss.tailSnakeUp;
        this.xShift = 0;
        this.yShift = -35;
      }
    })
  }

  checkCollision(head,array){
    for(let i = 0; i < array.length; i++){
      if(head.x == array[i].x && head.y == array[i].y){
        return true;
      }
    }
    return false;
  }

  eatFood() {
    if ((this.xSnake <= this.food.x + 30 && this.xSnake >= this.food.x - 30) && (this.ySnake <= this.food.y + 30 && this.ySnake >= this.food.y - 30)) {
      this.randomFriut = this.fruits[Math.floor(Math.random() * this.fruits.length)];
      this.score++;
      this.nss.eatSound.play();
      this.food = {
        x :Math.floor(Math.random()*45 + 5) * this.box,
        y :Math.floor(Math.random()*18 + 3) * this.box
      };
    } else {
      this.snake.pop();
    }
  }

  createNewGame() {
    let newHead = {
      x : this.xSnake,
      y : this.ySnake
    };

    if (this.xSnake < 5 || this.xSnake > this.canvas.width - 90 ||
      this.ySnake < 80 || this.ySnake > this.canvas.height - 50 ||
      this.checkCollision(newHead, this.snake)) {
      this.nss.deadSound.play();
      setTimeout(() => location.reload(), 1000);
    }
    this.snake.unshift(newHead);
  }

  moveSnake() {
    if (this.direction == "LEFT") this.xSnake -= this.box / 2;
    if (this.direction == "UP") this.ySnake -= this.box / 2;
    if (this.direction == "RIGHT") this.xSnake += this.box / 2;
    if (this.direction == "DOWN") this.ySnake += this.box / 2;
  }

  drawSnake() {
    for(let i = 0; i < this.snake.length; i++) {
      if (i === 0) {
        this.context.drawImage(this.head, this.snake[i].x, this.snake[i].y);
      } else {
        this.context.drawImage(this.body, this.snake[i].x + this.xShift, this.snake[i].y + this.yShift);
      }

      if (i === this.snake.length - 1 && i !== 0) {
        this.context.drawImage(this.tail, this.snake[i].x + this.xShift * 2, this.snake[i].y + this.yShift * 2);
      }
    }
  }

  saveHighScore() {
    if(this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('neonSnakeHighScore', this.highScore);
      this.localStorageService.getCurrentUsing();
    }
  }

  drawScore() {
    this.context.fillStyle = "white";
    this.context.font = "60px Changa one";
    this.context.fillText(`${this.score}`, this.canvas.width / 6, this.canvas.height / 12);
  }

  drawHighScore() {
    this.context.fillStyle = "white";
    this.context.font = "60px Changa one";
    this.context.fillText(`${this.highScore}`, this.canvas.width - this.canvas.width / 12, this.canvas.height / 12);
  }
}
