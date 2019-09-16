import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonSnakeComponent } from './components/neon-snake.component';
import {NeonSnakeRoutingModule} from './neon-snake-routing.module';

@NgModule({
  declarations: [NeonSnakeComponent],
  imports: [
    CommonModule,
    NeonSnakeRoutingModule
  ]
})
export class NeonSnakeModule { }
