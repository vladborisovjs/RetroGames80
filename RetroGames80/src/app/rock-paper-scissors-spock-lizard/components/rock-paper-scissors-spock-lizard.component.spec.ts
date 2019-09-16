import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScissorsSpockLizardComponent } from './rock-paper-scissors-spock-lizard.component';

describe('FilesComponent', () => {
  let component: RockPaperScissorsSpockLizardComponent;
  let fixture: ComponentFixture<RockPaperScissorsSpockLizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockPaperScissorsSpockLizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScissorsSpockLizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
