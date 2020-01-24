import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeonSnakeService {
  headSnakeLeft: HTMLImageElement;
  headSnakeRight: HTMLImageElement;
  headSnakeDown: HTMLImageElement;
  headSnakeUp: HTMLImageElement;
  bodySnakeHorizontal: HTMLImageElement;
  bodySnakeVertical: HTMLImageElement;
  tailSnakeLeft: HTMLImageElement;
  tailSnakeRight: HTMLImageElement;
  tailSnakeUp: HTMLImageElement;
  tailSnakeDown: HTMLImageElement;
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
    this.headSnakeLeft = new Image();
    this.headSnakeLeft.src = '../../../assets/neon-snake/img/character/head-left.png';
    this.headSnakeRight = new Image();
    this.headSnakeRight.src = '../../../assets/neon-snake/img/character/head-right.png';
    this.headSnakeDown = new Image();
    this.headSnakeDown.src = '../../../assets/neon-snake/img/character/head-down.png';
    this.headSnakeUp = new Image();
    this.headSnakeUp.src = '../../../assets/neon-snake/img/character/head-up.png';
    this.bodySnakeHorizontal = new Image();
    this.bodySnakeHorizontal.src = '../../../assets/neon-snake/img/character/body-horizontal.png';
    this.bodySnakeVertical = new Image();
    this.bodySnakeVertical.src = '../../../assets/neon-snake/img/character/body-vertical.png';
    this.tailSnakeLeft = new Image();
    this.tailSnakeLeft.src = '../../../assets/neon-snake/img/character/tail-left.png';
    this.tailSnakeRight = new Image();
    this.tailSnakeRight.src = '../../../assets/neon-snake/img/character/tail-right.png';
    this.tailSnakeUp = new Image();
    this.tailSnakeUp.src = '../../../assets/neon-snake/img/character/tail-up.png';
    this.tailSnakeDown = new Image();
    this.tailSnakeDown.src = '../../../assets/neon-snake/img/character/tail-down.png';
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
