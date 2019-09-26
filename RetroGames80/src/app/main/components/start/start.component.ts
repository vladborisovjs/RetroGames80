import { Component, OnInit } from '@angular/core';
import {ICardMenuItem} from "../../../navigation/card-menu/card-menu.component";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  cardMenuItems: ICardMenuItem[] = [
    {
      label: 'Asteroid1979',
      routerLink: '/asteroids1979',
      iconClass: '../../../assets/asteroids1979/icons/asteroid.png'
    },
    {
      label: 'Flappy Bird',
      routerLink: '/flappybird',
      iconClass: '../../../assets/flappy-bird/icons/flappy-bird.png'
    },
    {
      label: 'Neon Snake',
      routerLink: '/neonsnake',
      iconClass: '../../../assets/neon-snake/icons/snake.png'
    },
    {
      label: 'Rock Paper Scissors Spock Lizard',
      routerLink: '/rpssl',
      iconClass: '../../../assets/rock-paper-scissors-spock-lizard/icons/rpssl.png'
    },
    {
      label: 'Ping Pong',
      routerLink: '/pingpong',
      iconClass: '../../../assets/ping-pong/icons/ping-pong-icon-18.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
