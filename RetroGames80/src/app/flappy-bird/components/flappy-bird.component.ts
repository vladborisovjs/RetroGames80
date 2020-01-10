import { Component, OnInit } from '@angular/core';
import {FlappyBirdService} from "../services/flappy-bird.service";

@Component({
  selector: 'app-flappy-bird',
  templateUrl: './flappy-bird.component.html',
  styleUrls: ['./flappy-bird.component.scss']
})
export class FlappyBirdComponent implements OnInit {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private xBird: number = 10;
  private yBird: number  = 150;
  private score: number  = 0;
  private highScore: number = 0;
  private pipe: any[] = [];
  private GRAVITY: number  = 1.5;
  constructor(private fbService: FlappyBirdService) {}

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
    this.context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 72;

    this.pipe[0] = {
      x : this.canvas.width,
      y : 0
    };

    this.draw();
    this.createUserEvents();
  }

  createUserEvents() {
    document.addEventListener("keyup", (event) => {
      switch (event.code) {
        case 'ArrowUp' : return this.moveUp();
        case 'ArrowDown': return this.moveDown();
      }
      return '';
    });
  }

  moveUp() {
    this.fbService.bird = this.fbService.birdUp;
    this.yBird -= 25;
    this.fbService.flySound.play();
  }

  moveDown() {
    this.fbService.bird = this.fbService.birdDown;
    this.yBird += 15;
    this.fbService.flySound.play();
  }

  draw() {
    this.context.drawImage(this.fbService.background,0,0, this.canvas.width, this.canvas.height);

    for(let i = 0; i < this.pipe.length; i++) {
      let gap = this.fbService.upperPipe.height+100;

      this.context.drawImage(this.fbService.upperPipe, this.pipe[i].x, this.pipe[i].y, this.fbService.upperPipe.width, this.fbService.upperPipe.height);
      this.context.drawImage(this.fbService.lowerPipe,this.pipe[i].x,this.pipe[i].y+gap, this.fbService.lowerPipe.width, this.fbService.lowerPipe.height * 2);

      this.pipe[i].x--;

      if(this.pipe[i].x == this.canvas.width - 250) {
        this.pipe.push({
          x : this.canvas.width,
          y : Math.floor(Math.random()*this.fbService.upperPipe.height)-this.fbService.upperPipe.height
        });
      }

      if(this.xBird + this.fbService.bird.width >= this.pipe[i].x &&
        this.xBird <= this.pipe[i].x + this.fbService.upperPipe.width &&
        (this.yBird <= this.pipe[i].y + this.fbService.upperPipe.height || this.yBird + this.fbService.bird.height >= this.pipe[i].y+gap)
        || this.yBird + this.fbService.bird.height >=  this.canvas.height - this.fbService.field.height
        || this.yBird < 0) {
        location.reload();
      }

      if(this.pipe[i].x == 5){
        this.score++;
        this.fbService.scoreSound.play();
      }
    }

    this.yBird += this.GRAVITY;

    this.context.drawImage(this.fbService.field,0,this.canvas.height - this.fbService.field.height, this.canvas.width,this.canvas.height / 4);
    this.context.drawImage(this.fbService.bird, this.xBird, this.yBird);
    this.saveHighScore();
    this.drawScore();
    this.drawHighScore();
    window.requestAnimationFrame(() => this.draw()); // перерисовка
  }

  saveHighScore() {
    if (this.highScore == null) {
      this.highScore = 0;
    }

    if(this.score > this.highScore) {
      this.highScore = this.score;
      // try {
      //   localStorage.setItem(SAVE_KEY_SCORE,highScore);
      // } catch (e) {
      //   if (e == QUOTA_EXCEEDED_ERR) {
      //     alert('limit exceed');
      //   }
      // }
    }
  }

  drawScore() {
    this.context.fillStyle = "#000";
    this.context.font = "20px Verdana";
    this.context.fillText(`Score ${this.score}`,10,this.canvas.height-20);
  }

  drawHighScore() {
    this.context.fillStyle = "#000";
    this.context.font = "20px Verdana";
    this.context.fillText(`HighScore ${this.highScore}`,this.canvas.width-150,this.canvas.height-20);
  }

}
