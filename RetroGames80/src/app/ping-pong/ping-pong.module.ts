import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PingPongComponent } from './components/ping-pong.component';
import {PingPongRoutingModule} from './ping-pong-routing.module';

@NgModule({
  declarations: [PingPongComponent],
  imports: [
    CommonModule,
    PingPongRoutingModule
  ]
})
export class PingPongModule { }
