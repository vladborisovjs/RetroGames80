import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asteroids1979Component } from './asteroids1979.component';

describe('ButtonsComponent', () => {
  let component: Asteroids1979Component;
  let fixture: ComponentFixture<Asteroids1979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asteroids1979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asteroids1979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
