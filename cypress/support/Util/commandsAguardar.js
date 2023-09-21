import CONSTANTES from '../locators'

//#region Aguardar
Cypress.Commands.add('aguardarExistir', (nomeCampo, tempo) =>
{
    cy.get(nomeCampo, { timeout: tempo }).should('exist');
})

Cypress.Commands.add('aguardarNaoExistir', (nomeCampo, tempo) =>
{
    cy.get(nomeCampo, { timeout: tempo }).should('not.exist');
})

Cypress.Commands.add('aguardarVisivel', (nomeCampo, tempo) =>
{
    cy.get(nomeCampo, { timeout: tempo }).should('be.visible');
})

Cypress.Commands.add('aguardarInvisivel', (nomeCampo, tempo) =>
{
    cy.get(nomeCampo, { timeout: tempo }).should('not.be.visible');
})
//#endregion