import { TestBed } from '@angular/core/testing';

import { LoadProjectsService } from './load-projects.service';

describe('LoadProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadProjectsService = TestBed.get(LoadProjectsService);
    expect(service).toBeTruthy();
  });
});
