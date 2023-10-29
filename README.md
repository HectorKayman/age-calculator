# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](/screenshots/desktop-design.jpg)

### Links

- Solution URL: [Github Repository](https://github.com/HectorKayman/age-calculator)
- Live Site URL: [Github Live Page](https://hectorkayman.github.io/age-calculator/)

## My process

I have created a simple React application that calculates the age gap in years, months, and days based on a user's input of their birthdate. The application consists of four main components: `App`, `Form`, `FormInput`, and `Display`. Here's a breakdown of how they work together:

#### `App` Component:

- This is the root component of the application.
- It manages the state for the user's input (day, month, and year) and the age gap (gapDay, gapMonth, and gapYear).
- The `handleCalculateAge` function is called when the user submits the form, and it calculates the age gap based on the current date and user's input.

#### `Form` Component:

- The `Form` component is responsible for rendering the input form where the user can enter their birthdate.
- It also manages the validation and error handling for the input fields (day, month, and year).
- The `handleSubmit` function is called when the user submits the form. It checks the validity of each input and either displays error messages or calculates the age gap.

#### `FormInput` Component:

- This component is used for rendering individual input fields (day, month, and year) within the form.
- It includes labels, input fields, and error messages for each input.
- The component updates the state when the user enters or changes values in the input fields.

#### `Display` Component:

- The `Display` component is responsible for showing the calculated age gap in years, months, and days.
- It receives the age gap data as props and displays it to the user.

### Built with

- HTML5
- CSS3
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - JS Bundler

### What I learned:

- I learned how to create a basic React application that manages state, handles user input, and displays calculated results.
- I learned about form validation and error handling in React components.
- I gained experience in passing data between parent and child components through props.

### Continued development:

- The application can be further enhanced by adding more error handling and validation, such as checking for leap years and ensuring that the birthdate is not in the future.
- Styling and user interface improvements can be made to enhance the user experience.
- The age calculation logic can be refined to consider more precise date differences, especially for edge cases like birthdays that have not occurred yet in the current year.
- A more robust responsiveness is also needed.

### Useful resources

- [BEST Ways to Handle and Validate React Forms without a Library](https://youtu.be/tIdNeoHniEY?si=3N4ediHv0ykB8oNr) - This was a very useful youtube video.

## Author

- Frontend Mentor - [@HectorKayman](https://www.frontendmentor.io/profile/HectorKayman)

## Acknowledgments
