import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './auth-firebase.service';



describe('AuthFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
