import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgbModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day2';
}
