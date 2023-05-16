class LoginPage {
    visit() {
      cy.visit(URL);
    }
  
    getUsernameField() {
      return cy.get('input[name="username"]');
    }
  
    getPasswordField() {
      return cy.get('input[name="password"]');
    }
  
    getSubmitButton() {
      return cy.get('button[type="submit"]');
    }
  
    getErrorMessage() {
      return cy.get('.show');
    }
  
    getPasswordVisibilityButton() {
      return cy.get('.password-visibility-button');
    }
  
    login(validUsername, validPassword) {
      this.getUsernameField().type(username);
      this.getPasswordField().type(password);
      this.getSubmitButton().click();
    }
  }
  
  export default LoginPage;
  