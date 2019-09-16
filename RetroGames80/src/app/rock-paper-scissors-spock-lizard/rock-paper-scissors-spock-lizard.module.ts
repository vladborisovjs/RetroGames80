import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RockPaperScissorsSpockLizardComponent } from './components/rock-paper-scissors-spock-lizard.component';
import {RockPaperScissorsSpockLizardRoutingModule} from './rock-paper-scissors-spock-lizard-routing.module';

@NgModule({
  declarations: [RockPaperScissorsSpockLizardComponent],
  imports: [
    CommonModule,
    RockPaperScissorsSpockLizardRoutingModule
  ]
})
export class RockPaperScissorsSpockLizardModule { }
