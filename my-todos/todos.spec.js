describe('test todos', function() {
  it('Visits page', function() {
    cy.visit('https://my-vue-todos.netlify.app/')
    cy.get('.container')
    cy.get('.list-group')

//add to-dos
    cy.get('.form-control')
      .type('Samsung Ultra 21')
      .should('have.value', 'Samsung Ultra 21')
    cy.get('form').submit()
    
    cy.get('.form-control')
      .type('iphone XR')
      .should('have.value', 'iphone XR')
    cy.get('form').submit()
//edit
    cy.get(".list-group").children().eq(0).children().eq(1).click()
    cy.get('form.flex-grow-1').type(' Edited').submit()
//complated
    cy.get(".list-group").children().eq(0).click()
//delate
    cy.get(".list-group").children().eq(1).children().eq(2).click()

      
    })  
  })