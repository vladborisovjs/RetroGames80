import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {NavigationModule} from '../navigation/navigation.module';
import {MainComponent} from './components/main/main.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [MainComponent, StartComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NavigationModule
  ]
})
export class MainModule { }
