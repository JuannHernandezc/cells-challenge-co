@dashboard
Feature: As a logged user, I want to access to dashboard

  Scenario: As a User I should be able to see the Dashboard
    Given I'm a logged user
    When  I go to the dashboard
    Then  I should see the dashboard

  Scenario: As a User I should be able to see the Info page
    Given I'm a logged user
    When  I view the help page
    Then  I should see a lovely info page

  Scenario: As a User I should be able to logout
    Given I'm a logged user
    When  I log out
    Then  I should see the login page

  Scenario: As a User I should be able to see the movement's list
    Given I'm a logged user with movements
    When  I go to the dashboard
    Then  I should see at least 2 movements with a title