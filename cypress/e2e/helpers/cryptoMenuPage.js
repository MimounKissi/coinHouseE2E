const locators = {
  book: '[href*="coinhouse-livret-crypto"]',
  accept: "#hs-eu-confirmation-button",
};

export function checkCryptoSavingMenu() {
  cy.url().should("include", "crypto-savings-plan/");
}

export function bookAnAppointment() {
  cy.get(locators.book).eq(0).invoke("removeAttr", "target").click();
}

export function acceptCookie() {
  cy.get(locators.accept).click();
}
