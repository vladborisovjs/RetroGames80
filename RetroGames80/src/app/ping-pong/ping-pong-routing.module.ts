import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PingPongComponent} from './components/ping-pong.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Кнопки',
    },
    children: [
      {
        path: '',
        component: PingPongComponent,
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
export class PingPongRoutingModule{ }
