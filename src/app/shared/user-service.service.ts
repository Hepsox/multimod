import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, toArray } from 'rxjs';
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
}
