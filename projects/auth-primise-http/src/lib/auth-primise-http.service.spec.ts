import { TestBed } from '@angular/core/testing';

import { AuthPrimiseHttpService } from './auth-primise-http.service';

describe('AuthPrimiseHttpService', () => {
  let service: AuthPrimiseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPrimiseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
