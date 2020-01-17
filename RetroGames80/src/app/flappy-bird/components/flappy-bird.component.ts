import { Component, OnInit } from '@angular/core';
import {FlappyBirdService} from "../services/flappy-bird.service";
import {LocalstorageService} from "../../services/localstorage.service";

@Component({
  selector: 'app-flappy-bird',
  templateUrl: './flappy-bird.component.html',
  styleUrls: ['./flappy-bird.component.scss']
})
export class FlappyBirdComponent implements OnInit {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private xBird: number;
  private yBird: number;
  private score: number;
  private highScore;
  private pipe: any[] = [];
  private readonly gravity: number  = 1.5;
  private state: number;
  private readonly states= {
    GetReady : 0,
    Game : 1,
    GameOver : 2
  };
  constructor(
    private fbService: FlappyBirdService,
    private localStorageService: LocalstorageService) {}

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
    this.context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 72; // todo убрать костыль
    this.xBird = 10;
    this.yBird = this.canvas.height / 2;
    this.score = 0;
    this.highScore = localStorage.getItem('flappyBirdHighScore') || 0;
    this.pipe[0] = {
      x : this.canvas.width,
      y : 0
    };
    this.state = this.states.GetReady;
    this.drawMainGame();
    this.createUserEvents();
  }

  createUserEvents() {
    document.addEventListener("keyup", () => {
        this.moveUp();
    });
    document.addEventListener("keydown", () => {
        this.moveDown();
    });
    document.addEventListener("mouseup", (event) => {
        event.preventDefault();
        this.moveUp();
    }, false);
    document.addEventListener("mousedown", (event) => {
        event.preventDefault();
        this.moveDown();
    },false);
  }

  moveUp() {
    this.fbService.bird = this.fbService.birdUp;
    this.yBird -= 25;
    this.fbService.flySound.play();
  }

  moveDown() {
    this.fbService.bird = this.fbService.birdDown;
    this.fbService.flySound.play();
  }

  drawMainGame() {
    if (this.state === 0) {
      this.getReady();
    } else if (this.state === this.states.Game) {
      this.gameOn();
    } else if (this.state === this.states.GameOver) {
      this.gameOver();
    }
    window.requestAnimationFrame(() => this.drawMainGame()); // redraw
  }

  getReady() {
    this.context.drawImage(this.fbService.background,0,0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.fbService.field,0,this.canvas.height - this.fbService.field.height, this.canvas.width,this.canvas.height / 4);
    this.context.drawImage(this.fbService.getReady, this.canvas.width / 2.5, this.canvas.height / 4, this.canvas.width / 4,this.canvas.height / 2);
    this.context.drawImage(this.fbService.bird, this.xBird, this.yBird);
    this.canvas.addEventListener('click', () => {
      this.state = this.states.Game;
    })
  };
  gameOn() {
    this.context.drawImage(this.fbService.background,0,0, this.canvas.width, this.canvas.height);
    for(let i = 0; i < this.pipe.length; i++) {
      let gap = this.fbService.upperPipe.height+100;
      this.context.drawImage(this.fbService.upperPipe, this.pipe[i].x, this.pipe[i].y, this.fbService.upperPipe.width, this.fbService.upperPipe.height);
      this.context.drawImage(this.fbService.lowerPipe,this.pipe[i].x,this.pipe[i].y+gap, this.fbService.lowerPipe.width, this.fbService.lowerPipe.height * 2);
      this.pipe[i].x--;
      // create pipes
      if(this.pipe[i].x == this.canvas.width - 250) {
        this.pipe.push({
          x : this.canvas.width,
          y : Math.floor(Math.random()*this.fbService.upperPipe.height)-this.fbService.upperPipe.height
        });
      }
      // check pipe collisions
      if(this.xBird + this.fbService.bird.width >= this.pipe[i].x &&
        this.xBird <= this.pipe[i].x + this.fbService.upperPipe.width &&
        (this.yBird <= this.pipe[i].y + this.fbService.upperPipe.height || this.yBird + this.fbService.bird.height >= this.pipe[i].y+gap)) {
        this.fbService.hitSound.play();

        setTimeout(() => {this.state = this.states.GameOver}, 400);
      }

      // check up and down collisions
      if (this.yBird + this.fbService.bird.height >=  this.canvas.height - this.fbService.field.height || this.yBird < 0) {
        this.fbService.dieSound.play();
        setTimeout( () => {this.state = this.states.GameOver}, 400);
      }
      // check if bird go through gap
      if(this.pipe[i].x == 5){
        this.score++;
        this.fbService.scoreSound.play();
      }
    }

    this.yBird += this.gravity;
    this.context.drawImage(this.fbService.field,0,this.canvas.height - this.fbService.field.height, this.canvas.width,this.canvas.height / 4);
    this.context.drawImage(this.fbService.bird, this.xBird, this.yBird);
    this.saveHighScore();
    this.drawScore();
    this.drawHighScore();
  };
  gameOver() {
    this.context.drawImage(this.fbService.gameOver,this.canvas.width / 2.5, this.canvas.height / 4, this.canvas.width / 4,this.canvas.height / 2);
    this.canvas.addEventListener('click', () => {
      location.reload();
    })
  };

  saveHighScore() {
    if(this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('flappyBirdHighScore', this.highScore);
      this.localStorageService.getCurrentUsing();
    }
  }

  drawScore() {
    this.context.fillStyle = "#FFF";
    this.context.strokeStyle = "#000";
    this.context.lineWidth = 1;
    this.context.font = "35px Verdana";
    this.context.fillText(`${this.score}`,this.canvas.width / 2, 50);
    this.context.strokeText(`${this.score}`,this.canvas.width / 2,50);
  }

  drawHighScore() {
    this.context.fillStyle = "#FFF";
    this.context.strokeStyle = "#000";
    this.context.lineWidth = 1;
    this.context.font = "35px Verdana";
    this.context.fillText(`High Score ${this.highScore}`,this.canvas.width-250,this.canvas.height-20);
    this.context.strokeText(`High Score ${this.highScore}`,this.canvas.width-250,this.canvas.height-20);
  }

}
