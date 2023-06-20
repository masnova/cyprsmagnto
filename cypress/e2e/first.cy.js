describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io")
    cy.get(".navbar-brand").should("have.text", "cypress.io")
    cy.get('h1').should("have.text", "Kitchen Sink")
  })
})