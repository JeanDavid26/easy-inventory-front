import { TestBed } from '@angular/core/testing';

import { FormValidationInterceptorService } from './form-validation-interceptor.service';

describe('FormValidationInterceptorService', () => {
  let service: FormValidationInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidationInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
