import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, map, of, toArray } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private http = inject(HttpClient);

  constructor() {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/users.json');
  }

  getRandomUser(): Observable<User> {
    return this.getUsers().pipe<User>(
      map((users) => {
        const randomIndex = Math.floor(Math.random() * users.length);
        return users[randomIndex];
      })
    );
  }

  login(): Observable<boolean> {
    return of(false).pipe(delay(3000));
  }
}
