import { TestBed } from '@angular/core/testing';
import { PasswordInputComponent, PasswordStrength } from './password-input.component';

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordInputComponent]
    });
    const fixture = TestBed.createComponent(PasswordInputComponent);
    component = fixture.componentInstance;
  });

  it('should set passwordStrength to empty string if password length is 0', () => {
    component.password = '';
    component.checkPasswordStrength();
    expect(component.passwordStrength).toEqual('');
  });

  it('should set passwordStrength to "easy" if password length is less than 8', () => {
    component.password = 'abc123';
    component.checkPasswordStrength();
    expect(component.passwordStrength).toEqual(PasswordStrength.Easy);
  });

  it('should set passwordStrength to "medium" if password length is at least 8 and contains lowercase, uppercase, and numeric characters', () => {
    component.password = 'Abc12345';
    component.checkPasswordStrength();
    expect(component.passwordStrength).toEqual(PasswordStrength.Medium);
  });

  it('should set passwordStrength to "strong" if password length is at least 8 and contains lowercase, uppercase, numeric, and special characters', () => {
    component.password = 'Abc123!!!';
    component.checkPasswordStrength();
    expect(component.passwordStrength).toEqual(PasswordStrength.Strong);
  });
});
