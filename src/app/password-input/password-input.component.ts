import { Component } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent {
  password: string = '';
  passwordStrength: string = '';

  checkPasswordStrength() {
    let i = 0;

    if (this.password.length === 0) {
      this.passwordStrength = '';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'easy';
    } else {
      if (/[a-z]/.test(this.password)) {
        i++;
      }
      if (/[A-Z]/.test(this.password)) {
        i++;
      }
      if (/[0-9]/.test(this.password)) {
        i++;
      }
      if (/[^a-zA-Z0-9]/.test(this.password)) {
        i++;
      }
    }

    this.updatePasswordStrength(i);
  }

  updatePasswordStrength(i: number) {
    if (i === 1) {
      this.passwordStrength = 'easy';
    } else if (i === 2) {
      this.passwordStrength = 'medium';
    } else if (i === 3) {
      this.passwordStrength = 'strong';
    }
  }
}
