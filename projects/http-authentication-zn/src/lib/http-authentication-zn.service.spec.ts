import { TestBed } from '@angular/core/testing';

import { HttpAuthenticationZnService } from './http-authentication-zn.service';

describe('HttpAuthenticationZnService', () => {
  let service: HttpAuthenticationZnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAuthenticationZnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
