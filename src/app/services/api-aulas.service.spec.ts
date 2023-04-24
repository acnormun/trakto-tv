import { TestBed } from '@angular/core/testing';

import { ApiAulasService } from './api-aulas.service';

describe('ApiAulasService', () => {
  let service: ApiAulasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAulasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
