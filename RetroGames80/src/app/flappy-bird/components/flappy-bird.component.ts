import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flappy-bird',
  templateUrl: './flappy-bird.component.html',
  styleUrls: ['./flappy-bird.component.scss']
})
export class FlappyBirdComponent implements OnInit {
  private canvas: HTMLCanvasElement;
  private context: any;
  private bird: HTMLImageElement;
  private birdDown: HTMLImageElement;
  private birdUp: HTMLImageElement;
  private background: HTMLImageElement;
  private field: HTMLImageElement;
  private upperPipe: HTMLImageElement;
  private lowerPipe: HTMLImageElement;
  private flySound: HTMLAudioElement;
  private scoreSound: HTMLAudioElement;
  private xBird: number = 10;
  private yBird: number  = 150;
  private score: number  = 0;
  private highScore: number = 0;
  private pipe: any[] = [];
  private GRAVITY: number  = 1.5;
  constructor() {

  }

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
    this.context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 72;
    this.bird = new Image();
    this.bird.src = "../../../assets/flappy-bird/img/character/bird.png";
    this.birdDown = new Image();
    this.birdDown.src = "../../../assets/flappy-bird/img/character/bird-down.png";
    this.birdUp = new Image();
    this.birdUp.src = "../../../assets/flappy-bird/img/character/bird-up.png";
    this.background = new Image();
    this.background.src = "../../../assets/flappy-bird/img/environment/background.png";
    this.field = new Image();
    this.field.src = "../../../assets/flappy-bird/img/environment/field.png";
    this.upperPipe = new Image();
    this.upperPipe.src = "../../../assets/flappy-bird/img/environment/upperPipe.png";
    this.lowerPipe = new Image();
    this.lowerPipe.src = "../../../assets/flappy-bird/img/environment/lowerPipe.png";
    this.flySound = new Audio();
    this.flySound.src = "../../../assets/flappy-bird/sounds/fly.mp3";
    this.scoreSound = new Audio();
    this.scoreSound.src = "../../../assets/flappy-bird/sounds/score.mp3";

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
    this.bird = this.birdUp;
    this.yBird -= 25;
    this.flySound.play();
  }

  moveDown() {
    this.bird = this.birdDown;
    this.yBird += 15;
    this.flySound.play();
  }

  draw() {
    this.context.drawImage(this.background,0,0, this.canvas.width, this.canvas.height);

    for(let i = 0; i < this.pipe.length; i++) {
      let gap = this.upperPipe.height+100;

      this.context.drawImage(this.upperPipe, this.pipe[i].x, this.pipe[i].y, this.upperPipe.width, this.upperPipe.height);
      this.context.drawImage(this.lowerPipe,this.pipe[i].x,this.pipe[i].y+gap, this.lowerPipe.width, this.lowerPipe.height * 2);

      this.pipe[i].x--;

      if(this.pipe[i].x == this.canvas.width - 250) {
        this.pipe.push({
          x : this.canvas.width,
          y : Math.floor(Math.random()*this.upperPipe.height)-this.upperPipe.height
        });
      }

      if(this.xBird + this.bird.width >= this.pipe[i].x &&
        this.xBird <= this.pipe[i].x + this.upperPipe.width &&
        (this.yBird <= this.pipe[i].y + this.upperPipe.height || this.yBird + this.bird.height >= this.pipe[i].y+gap)
        || this.yBird + this.bird.height >=  this.canvas.height - this.field.height
        || this.yBird < 0) {
        location.reload();
      }

      if(this.pipe[i].x == 5){
        this.score++;
        this.scoreSound.play();
      }
    }

    this.yBird += this.GRAVITY;

    this.context.drawImage(this.field,0,this.canvas.height - this.field.height, this.canvas.width,this.canvas.height / 4);
    this.context.drawImage(this.bird, this.xBird, this.yBird);
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
