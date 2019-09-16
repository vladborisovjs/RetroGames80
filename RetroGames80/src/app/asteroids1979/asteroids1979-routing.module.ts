import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Asteroids1979Component} from './components/asteroids1979.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Кнопки',
    },
    children: [
      {
        path: '',
        component: Asteroids1979Component,
        data: {
          title: null,
        },
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
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
export class Asteroids1979RoutingModule { }
