import { TestBed } from '@angular/core/testing';

import { MTGCardService } from './mtgcard.service';

describe('MTGCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MTGCardService = TestBed.get(MTGCardService);
    expect(service).toBeTruthy();
  });
});
