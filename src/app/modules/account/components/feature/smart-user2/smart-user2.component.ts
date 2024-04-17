import { Component, inject } from '@angular/core';
import { UserServiceService } from '../../../../../shared/user-service.service';
import { User } from '../../../../../models/User';
import { map, subscribeOn, toArray } from 'rxjs';

@Component({
  selector: 'app-smart-user2',
  templateUrl: './smart-user2.component.html',
  styleUrl: './smart-user2.component.css',
})
export class SmartUser2Component {
  user!: User;
  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getRandomUser().subscribe((user) => {
      this.user = user;
    });
  }
}
