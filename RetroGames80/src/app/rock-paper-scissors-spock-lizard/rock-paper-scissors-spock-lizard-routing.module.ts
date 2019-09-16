import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RockPaperScissorsSpockLizardComponent} from './components/rock-paper-scissors-spock-lizard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Кнопки',
    },
    children: [
      {
        path: '',
        component: RockPaperScissorsSpockLizardComponent,
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
export class RockPaperScissorsSpockLizardRoutingModule { }
