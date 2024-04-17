import { Component, inject } from '@angular/core';
import { User } from '../../../../../models/User';
import { UserServiceService } from '../../../../../shared/user-service.service';

@Component({
  selector: 'app-smart-user',
  templateUrl: './smart-user.component.html',
  styleUrl: './smart-user.component.css',
})
export class SmartUserComponent {
  users: User[] = [];
  private userService = inject(UserServiceService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersFromJsonFile) => {
      this.users = usersFromJsonFile;
    });
  }
}
