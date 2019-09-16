import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NeonSnakeComponent} from './components/neon-snake.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Кнопки',
    },
    children: [
      {
        path: '',
        component: NeonSnakeComponent,
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
export class NeonSnakeRoutingModule { }
