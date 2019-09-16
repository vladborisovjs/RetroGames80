import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlappyBirdComponent } from './flappy-bird.component';

describe('ChartsComponent', () => {
  let component: FlappyBirdComponent;
  let fixture: ComponentFixture<FlappyBirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlappyBirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlappyBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
