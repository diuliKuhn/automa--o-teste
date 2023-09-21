import CONSTANTES from '../../support/locators';

let variavelForaDoEscopo

describe('Exemplo de teste', () => {
it ('Teste 1', () => {
    variavelForaDoEscopo = 'valor';
    // Resto do código
});
it ('Teste 2', () => {
    //Você pode acessar a variável fora do escopo aqui
    cy.log(variavelForaDoEscopo);
    //Resto do seu código

});
    
});