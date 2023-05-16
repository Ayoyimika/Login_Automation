Feature: Login
  As a user
  I want to log in to my account
  So that I can access my dashboard

  Scenario: Valid login
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should be logged in

  Scenario: Invalid login
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should see an error message

  Scenario: Empty fields
    Given I am on the login page
    When I leave the username or password field empty
    And I click the login button
    Then I should see an error message

  Scenario: Password visibility
    Given I am on the login page
    When I click the password visibility button
    Then I should see the password
    When I click the password visibility button again
    Then I should not see the password
