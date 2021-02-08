import { TestBed } from '@angular/core/testing';

import { AutherizerService } from './autherizer.service';

describe('AutherizerService', () => {
  let service: AutherizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutherizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
