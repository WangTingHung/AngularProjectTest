import { TestBed } from '@angular/core/testing';

import { ChidTofatherService } from './chid-tofather.service';

describe('ChidTofatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChidTofatherService = TestBed.get(ChidTofatherService);
    expect(service).toBeTruthy();
  });
});
