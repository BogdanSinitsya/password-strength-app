import { Component } from '@angular/core';

export enum PasswordStrength {
  Easy = 'easy',
  Medium = 'medium',
  Strong = 'strong',
}

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent {
  password: string = '';
  passwordStrength: string = '';

  checkPasswordStrength() {
    var passwordStrengthScore = 0;

    if (this.password.length === 0) {
      this.passwordStrength = '';
    } else if (this.password.length < 8) {
      this.passwordStrength = PasswordStrength.Easy;
    } else {
      if (/[a-z]/.test(this.password) || /[A-Z]/.test(this.password)) {
        passwordStrengthScore++;
      }
      if (/[0-9]/.test(this.password)) {
        passwordStrengthScore++;
      }
      if (/[^a-zA-Z0-9]/.test(this.password)) {
        passwordStrengthScore++;
      }
    }

    this.updatePasswordStrength(passwordStrengthScore);
  }

  updatePasswordStrength(passwordStrengthScore: number) {
    if (passwordStrengthScore === 1) {
      this.passwordStrength = PasswordStrength.Easy;
    } else if (passwordStrengthScore === 2) {
      this.passwordStrength = PasswordStrength.Medium;
    } else if (passwordStrengthScore === 3) {
      this.passwordStrength = PasswordStrength.Strong;
    }
  }
}
