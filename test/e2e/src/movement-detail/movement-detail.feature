@movementDetail
Feature: As a logged user, I want to access movement details

  Scenario: As a User I should be able to see the movement's detail
    Given I'm a logged user with movements
    When  I choose movement in position 0
    Then  I should see the movement's detail

  Scenario: As a User I should be able to go back from movement's detail
    Given I'm a logged user with movements
    And   I'm in a movement's detail
    When  I go back from movement's detail
    Then  I should see the dashboard