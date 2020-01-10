import { TestBed } from '@angular/core/testing';

import { FlappyBirdService } from './flappy-bird.service';

describe('FlappyBirdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlappyBirdService = TestBed.get(FlappyBirdService);
    expect(service).toBeTruthy();
  });
});
