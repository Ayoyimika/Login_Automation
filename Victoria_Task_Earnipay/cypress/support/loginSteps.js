import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../support/loginPage';

const loginPage = new LoginPage();

const URL = 'https://practicetestautomation.com/practice-test-login/';
const validUsername = 'student';
const validPassword = 'Password123';
const invalidUsername = 'excuse';
const invalidPassword = 'test';

Given('I am on the login page', () => {
  loginPage.visit();
});

When('I enter valid credentials', () => {
  loginPage.login(validUsername, validPassword);
});

When('I enter invalid credentials', () => {
  loginPage.login(invalidUsername, invalidPassword);
});

When('I leave the username or password field empty', (field) => {
  if (field === 'username') {
    loginPage.login('', validPassword);
  } else if (field === 'password') {
    loginPage.login(validUsername, '');
  }
});


When('I click the login button', () => {
  loginPage.getSubmitButton().click();
});

When('I click the password visibility button', () => {
  loginPage.getPasswordVisibilityButton().click();
});

Then('I should be logged in', () => {
    cy.get('.post-title').should('be.visible')
});

Then('I should see an error message', () => {
  loginPage.getErrorMessage().should('be.visible');
});

Then('I should see the password', () => {
  loginPage.getPasswordField().should('have.attr', 'type', 'text');
});

Then('I should not see the password', () => {
  loginPage.getPasswordField().should('have.attr', 'type', 'password');
});
