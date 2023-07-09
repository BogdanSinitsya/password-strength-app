# Password Strength Test

This project provides a password strength test component implemented in Angular. It allows users to check the strength of their passwords based on various criteria such as length, presence of uppercase and lowercase letters, numeric characters, and special characters.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

Follow these steps to install the project:

1. Clone the repository: `https://github.com/BogdanSinitsya/password-strength-app`
2. Navigate to the project directory: `cd password-strength-app`
3. Start the project: `ng serve`

If everything is successful, you should see "Project is running at http://localhost:4200/" in the terminal.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code Overview

The main parts of the code and their functionalities are as follows:

- `main` CSS styles: This section defines the CSS styles for the main container of the component, including flexbox properties for layout and alignment.

- `input` CSS styles: This section defines the CSS styles for the password input field, including its width, border radius, and background color.

- `strength-indicator` CSS styles: This section defines the CSS styles for the strength indicator container, including its height and margin-top.

- `strength-section` CSS styles: This section defines the CSS styles for each individual strength section within the indicator, including its width, border radius, padding, margin, and background color.

- `PasswordInputComponent` class: This class represents the password input component in Angular. It includes properties for the password value and its strength, as well as methods to check the password strength and update the strength indicator.

- `checkPasswordStrength` method: This method checks the strength of the entered password based on its length and the presence of different character types. It assigns a strength value (easy, medium, or strong) to the `passwordStrength` property.

- `updatePasswordStrength` method: This method updates the `passwordStrength` property based on the password strength score calculated in the `checkPasswordStrength` method.

- `ngModel` and `(ngModelChange)` directives: These directives bind the password input field to the `password` property in the component class and trigger the `checkPasswordStrength` method when the password value changes.


## Technologies Used

The following technologies and tools were used in the development of this project:

- Angular
- HTML
- CSS
- TypeScript

## Authors

This project was developed by Bogdan Sinitsya (https://github.com/BogdanSinitsya).
