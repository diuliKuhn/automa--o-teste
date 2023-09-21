import CONSTANTES from '../../../../support/locators';

describe('Ajuste de Custo Médio', () =>
{
  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######
  it('Ajuste de Custo Médio', () =>
  {
    
    cy.visit(CONSTANTES.SISTEMA.URL.ESTOQUE.AJUSTE_CUSTO_MEDIO);

    cy.interceptar('GET', '/TestesFuncionais/servlet/erpsolution.estoque.estlanctoajustewizard**', 'buscaquantidadeGET');
    cy.interceptar('POST', '/TestesFuncionais/servlet/erpsolution.estoque.estlanctoajustewizard**', 'buscaquantidadePOST');
    cy.interceptar('GET', '/TestesFuncionais/static/fmxMenu/js/script.js**', 'aguardarJSGET');
    
    cy.valorAtribuir('#W0024vMOTIVO', 'OK');
    
    cy.get('#W0024BTNWIZARDNEXT').click();

    cy.aguardarExistir('[data-colindex="0"]', 10000);
    cy.wait('@aguardarJSGET');
    
    cy.get('#W0024BTNINSERIR').click();
    
    //cy.wait('@aguardarJSGET');
    cy.wait('@buscaquantidadePOST');
    cy.aguardarVisivel('#W0024W0052TABLEPRINCIPAL', 10000);

    cy.valorAtribuir('#W0024W0052vPRODUTOID', 'PRODUTO 30');
    
    cy.wait('@buscaquantidadePOST');

    cy.get('#W0024W0052vE51CUSTO_MEDIO_UNITARIOATUAL');

    cy.wait('@buscaquantidadePOST');

    cy.get('#W0024W0052vE51CUSTO_MEDIO_UNITARIOATUAL').click();

    cy.wait('@buscaquantidadePOST');
    
    cy.valorAtribuir('#W0024W0052vE51CUSTO_MEDIO_UNITARIOATUAL', '250,0000');
    
    cy.get('#W0024W0052BTNENTER').click();
    
    cy.aguardarInvisivel('#W0024W0052TABLEPRINCIPAL', 10000);

    cy.get('#W0024BTNWIZARDLASTNEXT').click();
  })
})