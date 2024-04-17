import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { SmartUserComponent } from './components/feature/smart-user/smart-user.component';
import { UserComponent } from './components/ui/user/user.component';

@NgModule({
  declarations: [AdminHomeComponent, SmartUserComponent, UserComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
