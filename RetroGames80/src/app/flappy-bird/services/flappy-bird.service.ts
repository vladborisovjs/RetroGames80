import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlappyBirdService {
  bird: HTMLImageElement;
  bird1: HTMLImageElement;
  bird2: HTMLImageElement;
  bird3: HTMLImageElement;
  birdDown: HTMLImageElement;
  birdUp: HTMLImageElement;
  background: HTMLImageElement;
  field: HTMLImageElement;
  upperPipe: HTMLImageElement;
  lowerPipe: HTMLImageElement;
  gameOver: HTMLImageElement;
  getReady: HTMLImageElement;
  start: HTMLImageElement;
  coin1: HTMLImageElement;
  coin2: HTMLImageElement;
  coin3: HTMLImageElement;
  coin4: HTMLImageElement;
  poop: HTMLImageElement;
  flySound: HTMLAudioElement;
  scoreSound: HTMLAudioElement;
  dieSound: HTMLAudioElement;
  hitSound: HTMLAudioElement;
  swooshingSound: HTMLAudioElement;
  constructor() {
    this.bird = new Image();
    this.bird.src = "../../../assets/flappy-bird/img/character/bird.png";
    this.bird1 = new Image();
    this.bird1.src = "../../../assets/flappy-bird/img/character/bird1.png";
    this.bird2 = new Image();
    this.bird2.src = "../../../assets/flappy-bird/img/character/bird2.png";
    this.bird3 = new Image();
    this.bird3.src = "../../../assets/flappy-bird/img/character/bird3.png";
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
    this.gameOver = new Image();
    this.gameOver.src = "../../../assets/flappy-bird/img/environment/game-over.png";
    this.getReady = new Image();
    this.getReady.src = "../../../assets/flappy-bird/img/environment/get-ready.png";
    this.start = new Image();
    this.start.src = "../../../assets/flappy-bird/img/environment/start.png";
    this.coin1 = new Image();
    this.coin1.src = "../../../assets/flappy-bird/img/environment/coin1.png";
    this.coin2 = new Image();
    this.coin2.src = "../../../assets/flappy-bird/img/environment/coin2.png";
    this.coin3 = new Image();
    this.coin3.src = "../../../assets/flappy-bird/img/environment/coin3.png";
    this.coin4 = new Image();
    this.coin4.src = "../../../assets/flappy-bird/img/environment/coin4.png";
    this.poop = new Image();
    this.poop.src = "../../../assets/flappy-bird/img/environment/poop.png";
    this.flySound = new Audio();
    this.flySound.src = "../../../assets/flappy-bird/sounds/flap.wav";
    this.scoreSound = new Audio();
    this.scoreSound.src = "../../../assets/flappy-bird/sounds/point.wav";
    this.dieSound = new Audio();
    this.dieSound.src = "../../../assets/flappy-bird/sounds/die.wav";
    this.hitSound = new Audio();
    this.hitSound.src = "../../../assets/flappy-bird/sounds/hit.wav";
    this.swooshingSound = new Audio();
    this.swooshingSound.src = "../../../assets/flappy-bird/sounds/swooshing.wav";
  }
}
