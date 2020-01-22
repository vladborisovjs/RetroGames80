import { TestBed } from '@angular/core/testing';

import { NeonSnakeService } from './neon-snake.service';

describe('NeonSnakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeonSnakeService = TestBed.get(NeonSnakeService);
    expect(service).toBeTruthy();
  });
});
