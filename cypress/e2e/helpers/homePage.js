const locators = {
  topNavigation: "#et-top-navigation",
  logo: "#logo",
  investissmentMenu: "#menu-item-40124",
  cryptoSubMenu: "#menu-item-40125",
};

export function checkTopNavigation() {
  cy.get(locators.topNavigation).should("be.visible");
}

export function checkLogo() {
  cy.get(locators.logo).should("be.visible");
}

export function goToInvestissmentMenu() {
  cy.get(locators.investissmentMenu).click();
}

export function goToCryptoSubMenu() {
  cy.get(locators.cryptoSubMenu).click();
}
