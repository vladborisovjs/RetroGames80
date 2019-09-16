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
      iconClass: 'material-icons',
      materialIcons: 'radio_button_checked',
    },
    {
      label: 'Flappy Bird',
      routerLink: '/flappybird',
      iconClass: 'fas fa-database'
    },
    {
      label: 'Neon Snake',
      routerLink: '/neonsnake',
      iconClass: 'fas fa-file-signature'
    },
    {
      label: 'Rock-Paper-Scissors-Spock-Lizard',
      routerLink: '/rpssl',
      iconClass: 'fas fa-chart-bar'
    },
    {
      label: 'Ping Pong',
      routerLink: '/pingpong',
      iconClass: 'far fa-clone'
    },
  ];
  ngOnInit() {
  }

}
