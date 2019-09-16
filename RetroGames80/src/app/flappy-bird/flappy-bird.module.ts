import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlappyBirdComponent } from './components/flappy-bird.component';
import {FlappyBirdRoutingModule} from './flappy-bird-routing.module';

@NgModule({
  declarations: [FlappyBirdComponent],
  imports: [
    CommonModule,
    FlappyBirdRoutingModule
  ]
})
export class FlappyBirdModule { }
