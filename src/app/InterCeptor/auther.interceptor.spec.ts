import { TestBed } from '@angular/core/testing';

import { AutherInterceptor } from './auther.interceptor';

describe('AutherInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutherInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutherInterceptor = TestBed.inject(AutherInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
