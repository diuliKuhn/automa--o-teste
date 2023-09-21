import CONSTANTES from '../../../support/locators';

describe('Abertura de pedidos do Balcão com Bloqueio na Geracao da Fatura', () =>
{
  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })
  /

  it('Abertura de pedidos do Balcão com Bloqueio na Geracao da Fatura', function() {

    //cy.visit(CONSTANTES.SISTEMA.URL.TROCA_EMPRESA_FILIAL);
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);
    cy.trocaEmpresaFilial(1, 2);
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.intercept('POST', '**erpsolution.balcao.varpedidowizard**').as('chamadapedido');
    cy.intercept('GET', '**erpsolution.balcao.varpedidowizard**').as('chamadapedido2');

    cy.get('#BTNBTNINSERT').click();
    cy.get('#W0021W0020VAR20CLIENTEID').clear();
    cy.wait(2000);
    cy.get('#W0021W0020VAR20CLIENTEID').type('805');

    cy.get('#W0021W0020VAR20CLIENTEENDERECOID').click();

    cy.wait('@chamadapedido');
    //cy.wait(2000);
    //cy.get('#W0021W0020VAR20VENDEDORID').click();    
    cy.get('#W0021W0020VAR20VENDEDORID').type('45');
    //cy.get('0021W0020BTNTRN_ENTER').should('be.visible').click();

    cy.get('#W0021W0020BTNTRN_ENTER').click();
    cy.get('#W0021W0012vE18CODPRO').clear();
    cy.get('#W0021W0012vE18CODPRO').type('item');
    cy.get('#W0021W0012ENTER').click();

    cy.get('@chamadapedido2');
    cy.get('#W0021W0012vADICIONAR_0001').click();
    cy.get('#W0021W0012W0456VAR21VENDEDORID').click();
    cy.get('#W0021W0012W0456BTNTRN_ENTER').click();
    cy.get('#W0021W0012BTNWIZARDSEGUINTE').click(); // fechar carrinho
    cy.wait(1000);
    cy.get('#W0021BTNWIZARDNEXT').click(); // seguinte wizard 3 
    cy.wait(1000);
    //cy.get('#W0021BTNWIZARDNEXT').click();
    //cy.get('#W0021W0015GridContainerRow_0001 > [data-colindex="7"]').click();
    cy.get('#W0021BTNWIZARDNEXT').click();
    cy.get('#span_W0021W0015S01STATUS_0001').should('have.text', 'Bloqueado');
    /* ==== End Cypress Studio ==== */
  });
}
)