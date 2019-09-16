import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FlappyBirdComponent} from './components/flappy-bird.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Кнопки',
    },
    children: [
      {
        path: '',
        component: FlappyBirdComponent,
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
export class FlappyBirdRoutingModule { }
