import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlappyBirdService {
  bird: HTMLImageElement;
  birdDown: HTMLImageElement;
  birdUp: HTMLImageElement;
  background: HTMLImageElement;
  field: HTMLImageElement;
  upperPipe: HTMLImageElement;
  lowerPipe: HTMLImageElement;
  flySound: HTMLAudioElement;
  scoreSound: HTMLAudioElement;
  constructor() {

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
  }
}
