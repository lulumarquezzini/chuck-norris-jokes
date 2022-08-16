describe("Home", () => {
  it("should be able to render the home page", () => {
    cy.visit("/");
    cy.contains("Chuck Norris");
  });

  it("should not search if you click without filling the inputs", () => {
    cy.visit("/");
    cy.get("button").first().click();
    cy.get("button").first().next().click();
  });

  it("should be able to clear the fields with one click", () => {
    cy.visit("/");
    cy.get("input").type("argos");
    cy.get("input").should("have.value", "argos");
    cy.get("svg").last().click();
    cy.get("input").should("have.value", "");
  });

  it("should be able to do a normal search", () => {
    cy.visit("/");
    cy.get("input").type("test");
    cy.get("input").should("have.value", "test");
    cy.get("button").first().click();
    cy.contains("results");
    cy.get(".list").should("not.have.length", 1);
  });

  it("should be able to do a normal search and not find anything", () => {
    cy.visit("/");
    cy.get("input").type("argos");
    cy.get("input").should("have.value", "argos");
    cy.get("button").first().click();
    cy.contains("Joke not found");
    cy.get(".list").should("not.exist");
  });

  it("should be able to do a lucky search", () => {
    cy.visit("/");
    cy.get("input").type("test");
    cy.get("input").should("have.value", "test");
    cy.get("button").last().click();
    cy.contains("Your lucky result is");
    cy.url().should("include", "lucky=true");
    cy.contains("test");
    cy.get(".list").should("have.length", 1);
  });

  it("should be able to do a lucky search and not find anything", () => {
    cy.visit("/");
    cy.get("input").type("argos");
    cy.get("input").should("have.value", "argos");
    cy.get("button").last().click();
    cy.contains("Your lucky result is");
    cy.url().should("include", "lucky=true");
    cy.contains("Joke not found");
    cy.get(".list").should("not.exist");
  });

  it('should be able to change coor if the user saved a dark mode', () => {
    localStorage.setItem('dark', 'true')
    cy.visit("/");
    cy.get('body').should('have.class', 'dark')
  })
});
