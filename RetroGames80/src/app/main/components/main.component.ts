import { Component, OnInit } from '@angular/core';
import {IMenuItem} from '../../navigation/nav-bar/nav-bar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  menuItems: IMenuItem[] = [
    {
      label: 'Asteroids1979',
      routerLink: '/asteroids1979',
      src: '../../../assets/asteroids1979/icons/asteroid.png'
    },
    {
      label: 'Flappy Bird',
      routerLink: '/flappybird',
    },
    {
      label: 'Neon Snake',
      routerLink: '/neonsnake',
      src: '../../../assets/neon-snake/icons/snake.png'
    },
    {
      label: 'Rock-Paper-Scissors-Spock-Lizard',
      routerLink: '/rpssl',
    },
    {
      label: 'Ping Pong',
      routerLink: '/pingpong',
      src: '../../../assets/ping-pong/icons/ping-pong-icon-18.png'
    },
  ];
  ngOnInit() {
  }

}
