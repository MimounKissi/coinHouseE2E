const locators = {
  mail: '[name="email"]',
  submitMail: '[data-key="emailForm.button"]',
  nextMonth: '[data-selenium-test="next-month-button"]',
  selectedDateByDefault: "#selected-date",
  availableTime: "#available-times-region",
  firstName: '[name="firstName"]',
  lastName: '[name="lastName"]',
  phone: '[name="phone"]',
  submit: '[data-selenium-test="forward-button"]',
  blocDate: '[data-selenium-test="property-form-header"]',
  blocSuccessSummaryStep: '[data-selenium-test="booking-summary-step"]',
};

export function fillMail(mail) {
  cy.get(locators.mail).type(mail);
}

export function submitMail() {
  cy.get(locators.submitMail).click();
}

export function goToTheNextMonth() {
  cy.get(locators.nextMonth).should("be.visible").click();
}

export function selectAvailableTime() {
  cy.get(locators.availableTime).click();
}

export function getAvailableTime() {
  return cy.get(locators.availableTime);
}

export function getSelectedDateByDefault() {
  return cy.get(locators.selectedDateByDefault);
}

export function fillInfoPerso() {
  cy.get(locators.firstName).type("Charlie");
  cy.get(locators.lastName).type("Chaplin");
  cy.get(locators.phone).type("0600000007");
}

export function submit() {
  cy.get(locators.submit).click();
}

export function checkMeet() {
  cy.get(locators.blocDate).then((completeDate) => {
    cy.get("@dateNumber").then((dateNumber) => {
      cy.get("@timeNumber").then((timeNumber) => {
        expect(completeDate).to.contain(dateNumber);
        expect(completeDate).to.contain(timeNumber);
      });
    });
  });
}

export function checkMeetFinalStep() {
  cy.get(locators.blocSuccessSummaryStep).should("be.visible");
}
