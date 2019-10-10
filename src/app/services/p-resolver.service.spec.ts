import { TestBed } from '@angular/core/testing';

import { PResolverService } from './p-resolver.service';

describe('PResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PResolverService = TestBed.get(PResolverService);
    expect(service).toBeTruthy();
  });
});
