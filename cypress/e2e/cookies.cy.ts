describe('Cookies', () => {
    it('Acepta el dialog de las cookies', () => {
      cy.visit('/')
      cy.get('[data-test="btnAceptar"]').click()
    })
  })
  