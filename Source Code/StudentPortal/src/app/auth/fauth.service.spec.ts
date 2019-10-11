import { TestBed } from '@angular/core/testing';

import { FauthService } from './fauth.service';

describe('FauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FauthService = TestBed.get(FauthService);
    expect(service).toBeTruthy();
  });
});
