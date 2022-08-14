describe("results", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Chuck Norris");
    cy.get("input").type("test");
    cy.get("button").contains("Search").click();
  });

  it("should be able to search in the results page", () => {
    cy.contains("test");
    cy.get("input").type("s{enter}");
    cy.contains("tests");
    cy.url().should("include", "input=tests");
  });

  it("should be able to clear the field in the results page", () => {
    cy.get("#crossIcon").click();
    cy.get("input").should("have.value", "");
  });

  it("should be able to go back to the home page", () => {
    cy.get("img").click();
    cy.url().should("not.include", "results");
  });

  it("should be able to filter by categories", () => {
    cy.get("p").contains("Explicit").click({ force: true });
    cy.contains("explicit");
    cy.get("p")
      .contains("Explicit")
      .parent()
      .should("have.class", "text-blue-500");
  });
});
