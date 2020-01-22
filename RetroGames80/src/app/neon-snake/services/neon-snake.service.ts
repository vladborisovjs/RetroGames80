import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeonSnakeService {
  headSnake: HTMLImageElement;
  bodySnake: HTMLImageElement;
  tailSnake: HTMLImageElement;
  gridBackground: HTMLImageElement;
  appleItem: HTMLImageElement;
  bananaItem: HTMLImageElement;
  cherryItem: HTMLImageElement;
  orangeItem: HTMLImageElement;
  pineappleItem: HTMLImageElement;
  strawberryItem: HTMLImageElement;
  deadSound: HTMLAudioElement;
  downSound: HTMLAudioElement;
  eatSound: HTMLAudioElement;
  leftSound: HTMLAudioElement;
  rightSound: HTMLAudioElement;
  upSound: HTMLAudioElement;

  constructor() {
    this.headSnake = new Image();
    this.headSnake.src = '../../../assets/neon-snake/img/character/head.jpg';
    this.bodySnake = new Image();
    this.bodySnake.src = '../../../assets/neon-snake/img/character/body.jpg';
    this.tailSnake = new Image();
    this.tailSnake.src = '../../../assets/neon-snake/img/character/tail.jpg';
    this.gridBackground = new Image();
    this.gridBackground.src = '../../../assets/neon-snake/img/environment/background/grid.jpg';
    this.appleItem = new Image();
    this.appleItem.src = '../../../assets/neon-snake/img/environment/models/apple.png';
    this.bananaItem = new Image();
    this.bananaItem.src = '../../../assets/neon-snake/img/environment/models/banana.png';
    this.cherryItem = new Image();
    this.cherryItem.src = '../../../assets/neon-snake/img/environment/models/cherry.png';
    this.orangeItem = new Image();
    this.orangeItem.src = '../../../assets/neon-snake/img/environment/models/orange.png';
    this.pineappleItem = new Image();
    this.pineappleItem.src = '../../../assets/neon-snake/img/environment/models/pineapple.png';
    this.strawberryItem = new Image();
    this.strawberryItem.src = '../../../assets/neon-snake/img/environment/models/strawberry.png';
    this.deadSound = new Audio();
    this.deadSound.src = '../../../assets/neon-snake/sounds/dead.mp3';
    this.downSound = new Audio();
    this.downSound.src = '../../../assets/neon-snake/sounds/down.mp3';
    this.eatSound = new Audio();
    this.eatSound.src = '../../../assets/neon-snake/sounds/eat.mp3';
    this.leftSound = new Audio();
    this.leftSound.src = '../../../assets/neon-snake/sounds/left.mp3';
    this.rightSound = new Audio();
    this.rightSound.src = '../../../assets/neon-snake/sounds/right.mp3';
    this.upSound = new Audio();
    this.upSound.src = '../../../assets/neon-snake/sounds/up.mp3';
  }
}
