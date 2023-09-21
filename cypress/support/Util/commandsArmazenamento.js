import CONSTANTES from '../locators'

import {atribuirValorRecursivo} from '../commands'

//#region Armazenamento/Atribuição de valores
Cypress.Commands.add('valorArmazenar', (nomeCampo, nomeVariavel) =>
{
    cy.get(nomeCampo).invoke('val').then(valor =>
    {
        cy.wrap(valor).as(nomeVariavel);
    })
})
Cypress.Commands.add('valorVariavelArmazenar', (valor, nomeVariavel) =>
{
    cy.wrap(valor).as(nomeVariavel);
})

Cypress.Commands.add('valorArmazenadoAtribuir', (nomeCampo, nomeVariavel) =>
{
    cy.get('@'+nomeVariavel).then((valor) =>
    {
        cy.get(nomeCampo).clear();
        atribuirValorRecursivo(nomeCampo, valor);
    });
})

Cypress.Commands.add('valorAtribuir', (nomeCampo, valor) =>
{
    atribuirValorRecursivo(nomeCampo, valor);
})


//#endregion
