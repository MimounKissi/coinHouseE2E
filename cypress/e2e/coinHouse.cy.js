describe("example to-do app", () => {
  it("displays two todo items by default", () => {
    cy.viewport("macbook-15");
    cy.visit("https://www.coinhouse.com/");
    cy.get("#menu-item-40124").click();
    cy.get("#menu-item-40125").click();
    cy.get('[href="**/coinhouse-livret-crypto"]')
      .eq(0)
      .invoke("removeAttr", "target")
      .click();
    cy.get('[name="email"]').type("kissi@gmail.fr");
    cy.get('[data-key="emailForm.button"]').click();
    cy.get('[data-selenium-test="next-month-button"]')
      .should("be.visible")
      .click();
    cy.get("#selected-date")
      .invoke("attr", "aria-label")
      .then((date) => {
        cy.get("#available-times-region")
          .children()
          .eq(0)
          .invoke("text")
          .then((time) => {
            const dateAux = date.split(" ");
            cy.log(dateAux[0]);
            cy.log(dateAux[1]);
            cy.get("#available-times-region").children().eq(0).click();
            const dateMeeting = `${dateAux[1]} ${dateAux[0]}`;
            cy.log(dateMeeting);
            cy.get("#hs-eu-confirmation-button").should("be.visible").click();
            cy.get('[data-selenium-test="property-form-header"]')
              .should("be.visible")
              .then((completeDate) => {
                expect(completeDate).to.contain(dateMeeting);
                expect(completeDate).to.contain(time);
              });
            cy.wait(10000);
          });
      });
  });
});
