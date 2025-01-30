import { TestBed } from '@angular/core/testing';

import { SlidingTextsService } from './sliding-texts.service';

describe('SlidingTextsService', () => {
  let service: SlidingTextsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidingTextsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
