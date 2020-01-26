import { TestBed } from '@angular/core/testing';

import { GmService } from './gm.service';

describe('GmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmService = TestBed.get(GmService);
    expect(service).toBeTruthy();
  });
});
