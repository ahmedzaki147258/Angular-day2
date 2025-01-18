import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import usersData from '../../assets/users.json';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-users-list',
  imports: [ UserCardComponent ],
  templateUrl: './users-list.component.html',
  standalone: true,
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  users: User[];
  constructor() { this.users = []; }
  ngOnInit() { this.users = usersData; }
  searchUsers(email: string): void {
    email=email.toLowerCase().trim();
    if(email.length===0) this.users = usersData;
    else this.users = usersData.filter(user => user.email.toLowerCase().includes(email));
  }
}
