describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should do maths', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('running-total').should('contain', '10');
  })
  // it('should do harder maths', () => {
  //   cy.get('#number2').click();
  //   cy.get('.display').should('contain', '2')
  // })
  // it('should do complex maths', () => {
  //   cy.get('#number2').click();
  //   cy.get('.display').should('contain', '2')
  // })
  // it('should show 0', () => {
   
})

