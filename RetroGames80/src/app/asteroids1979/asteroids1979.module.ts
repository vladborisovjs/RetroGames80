import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Asteroids1979Component} from './components/asteroids1979.component';
import {Asteroids1979RoutingModule} from './asteroids1979-routing.module';
import {NavigationModule} from '../navigation/navigation.module';

@NgModule({
  declarations: [Asteroids1979Component],
  imports: [
    CommonModule,
    NavigationModule,
    Asteroids1979RoutingModule
  ]
})
export class Asteroids1979Module { }
