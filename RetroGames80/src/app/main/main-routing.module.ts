import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {StartComponent} from "./components/start/start.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: null,
    },
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: StartComponent
      },
      {
        path: 'asteroids1979',
        loadChildren: '../asteroids1979/asteroids1979.module#Asteroids1979Module'
      },
      {
        path: 'flappybird',
        loadChildren: '../flappy-bird/flappy-bird.module#FlappyBirdModule'
      },
      {
        path: 'neonsnake',
        loadChildren: '../neon-snake/neon-snake.module#NeonSnakeModule'
      },
      {
        path: 'rpssl',
        loadChildren: '../rock-paper-scissors-spock-lizard/rock-paper-scissors-spock-lizard.module#RockPaperScissorsSpockLizardModule'
      },
      {
        path: 'pingpong',
        loadChildren: '../ping-pong/ping-pong.module#PingPongModule'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
