import { Component } from '@angular/core';
import { Role } from "app/role";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  role = new Role();
}
