import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../shared/user-service.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // return false;

  const userService = inject(UserServiceService);
  return userService.login().pipe(
    map((isAuth) => {
      if (isAuth) {
        return true;
      } else {
        router.navigate(['/']);
        return false;
      }
    })
  );
};
