import { Component } from '@angular/core';

export enum PasswordStrength {
  None = 'none',
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
    var passwordStrengthScore = this.getPasswordScore(this.password)
    this.passwordStrength = this.getPasswordStrength(passwordStrengthScore)
  }

  isPasswordNone(): boolean {
    return this.passwordStrength == PasswordStrength.None;
  }

  isPasswordEasy(): boolean {
    return this.passwordStrength == PasswordStrength.Easy;
  }

  isPasswordMedium(): boolean {
    return this.passwordStrength == PasswordStrength.Medium;
  }

  isPasswordStrong(): boolean {
    return this.passwordStrength == PasswordStrength.Strong;
  }

  shouldBeMarkedAsEasy(): boolean {
    return (this.password.length < 8 && this.password.length !== 0)
  }

  private getPasswordScore(password: string): number {
    if (this.password.length === 0) {
      return 0
    } else if (this.password.length < 8) {
      return 1
    }

    var score = 0

    if (/[A-я]/.test(this.password)) {
      score++;
    }
    if (/[0-9]/.test(this.password)) {
      score++;
    }
    if (/[^A-я0-9]/.test(this.password)) {
      score++;
    }

    return score
  }

  private getPasswordStrength(passwordStrengthScore: number): PasswordStrength {
    switch (passwordStrengthScore) {
      case 1: {
        return PasswordStrength.Easy;
      }
      case 2: {
        return PasswordStrength.Medium;
      }
      case 3: {
        return PasswordStrength.Strong;
      }
      default: {
        return PasswordStrength.None;
      }
    }
  }
}
