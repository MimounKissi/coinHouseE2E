Feature: The Facebook

  Scenario: Opening a social network page
    Given I am on coinHouse homePage
    Then homePage should be appear correctly
    And I go to the crypto savings account page 
    Then crypto savings account page be appear correctly
    When I want to book an appointment
    And I fill the mail "toto@mail.com"
    And I choose a meeting 
    Then the date should match 
    And I fill identity information 
    And I submit 
    Then the meet should be booked 