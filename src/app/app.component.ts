import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
onrSelectedUser($event: any) {
throw new Error('Method not implemented.');
}
  users = DUMMY_USERS;
  selectedUserId?: string;
  
  get selectedUser() {
    return this.users.find((users) => users.id == this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
}
}