import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { SmartUser2Component } from './components/feature/smart-user2/smart-user2.component';
import { User2Component } from './components/ui/user2/user2.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    SmartUser2Component,
    User2Component
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
