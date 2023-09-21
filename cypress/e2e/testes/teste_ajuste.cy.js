import CONSTANTES from '../../support/locators';

describe('Ajuste em Quantidade', () =>
{
    beforeEach(() =>
    {
        cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
    })



    //###### Início do bloco de testes - alterar aqui ######
    it('Teste 1 (acessar rotina)', () =>
    {
      cy.intercept('POST', '**erpsolution.estoque.estlanctoajustewizard**').as('buscaQuantidadeAtual');
      cy.intercept('GET', '**erpsolution.estoque.estlanctoajustewizard**').as('buscaQuantidadeAtual2');
      cy.intercept('GET', '**fmxMenu/js/script.js**').as('buscaQuantidadeAtual3');
      
          
      cy.visit(CONSTANTES.SISTEMA.URL.ESTOQUE.AJUSTE_QUANTIDADE);
      cy.wait('@buscaQuantidadeAtual');
      cy.get('#W0024vMOTIVO').type('OK');
      cy.wait('@buscaQuantidadeAtual');
      cy.get('#W0024BTNWIZARDNEXT').click();
      cy.wait(1000);
      cy.get('#W0024BTNINSERIR').click();
      cy.wait('@buscaQuantidadeAtual');
      cy.get('#W0024W0052vPRODUTOID').click();
      cy.get('#W0024W0052vPRODUTOID').clear();
      cy.get('#W0024W0052vPRODUTOID').type('PRODUTO 30');
      cy.get('#W0024W0052vE51QDISPOATUAL').click();
      cy.wait('@buscaQuantidadeAtual');
      cy.get('#W0024W0052vE51QDISPOATUAL').clear();
      cy.get('#W0024W0052vE51QDISPOATUAL').type('150,0000');
      
      

      let quantidade_atual = 0;
      //cy.get('#W0024W0052vE51QDISPOATUAL').invoke('val').then(aaaa => quantidade_atual = aaaa);
      cy.get('#W0024W0052vE51QDISPOATUAL').invoke('val').then(batata =>
      {
        cy.log(batata);
        quantidade_atual = batata;
        cy.log(quantidade_atual);
        
      })
      cy.log(quantidade_atual);

      //cy.get('#W0024W0052BTNENTER').click();
      //cy.get('#W0024BTNWIZARDLASTNEXT').click();

    })
})