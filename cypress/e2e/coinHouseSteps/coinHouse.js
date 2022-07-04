import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import * as homePage from "../helpers/homePage";
import * as cryptoSubMenupage from "../helpers/cryptoMenuPage";
import * as hubSpotPage from "../helpers/hubSpotPage";

Given(`I am on coinHouse homePage`, () => {
  cy.visit("/");
});

Then(`homePage should be appear correctly`, () => {
  homePage.checkTopNavigation();
  homePage.checkLogo();
});

Given(`I go to the crypto savings account page`, () => {
  homePage.goToInvestissmentMenu();
  homePage.goToCryptoSubMenu();
});

Then(`crypto savings account page be appear correctly`, () => {
  cryptoSubMenupage.checkCryptoSavingMenu();
});

When(`I want to book an appointment`, () => {
  cryptoSubMenupage.bookAnAppointment();
});

When(`I fill the mail {string}`, (mail) => {
  hubSpotPage.fillMail(mail);
  hubSpotPage.submitMail();
});

When(`I choose a meeting`, () => {
  hubSpotPage
    .getSelectedDateByDefault()
    .invoke("attr", "aria-label")
    .then((date) => {
      const dateAux = date.split(" ");
      const dateMeeting = `${dateAux[1]} ${dateAux[0]}`;
      cy.wrap(dateMeeting).as("dateNumber");
    });

  hubSpotPage
    .getAvailableTime()
    .children()
    .eq(0)
    .invoke("text")
    .then((time) => {
      cy.wrap(time).as("timeNumber");
    });

  hubSpotPage.getAvailableTime().children().eq(0).click();
});

Then(`the date should match`, () => {
  cryptoSubMenupage.acceptCookie();
  hubSpotPage.checkMeet();
});

When(`I fill identity information`, () => {
  hubSpotPage.fillInfoPerso();
});

When(`I submit`, () => {
  hubSpotPage.submit();
});

Then(`the meet should be booked`, () => {
  hubSpotPage.checkMeetFinalStep();
});
