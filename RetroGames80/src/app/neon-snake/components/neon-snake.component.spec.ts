import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonSnakeComponent } from './neon-snake.component';

describe('DataComponent', () => {
  let component: NeonSnakeComponent;
  let fixture: ComponentFixture<NeonSnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeonSnakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
