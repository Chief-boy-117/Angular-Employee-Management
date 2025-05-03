import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "First Name";
  angularVersion: string = "Version";
  version: number = 19;
  isActive: boolean = true;
  currentDate: Date = new Date();
  inputType: string = "radio";
  selectedState: string = "";

  showAlert(msg: string) {
    alert(msg);
  }

  greetUser() {
    if (this.firstName.length > 0) {
      this.showAlert("Welcome to Angular, " + this.firstName);
    } else {
      this.showAlert("Welcome to Angular, User");
    }
  }
}
