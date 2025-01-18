import { Component, Input } from '@angular/core';
import { NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-user-card',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle],
  templateUrl: './user-card.component.html',
  standalone: true,
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user!: any;
  getRoleColor(role: string): string {
    switch (role) {
      case 'admin':
        return 'red';
      case 'moderator':
        return 'orange';
      default:
        return 'green';
    }
  }
}
