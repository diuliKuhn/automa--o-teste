import CAMPOS from '../../../support/Balcao/locatorsPedido';
import CONSTANTES from '../../../support/locators';

describe('Balcão > Pedido > Bloqueio de Margem', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Pedido > Inserir item com bloqueio de Margem', () =>
  {
    cy.log('Alterando para Empresa 1, Filial 1, configurada para bloquear ao fechar o carrinho...');
    cy.trocaEmpresaFilial(1, 1);
    cy.log('Troca efetuada...');

    cy.log('Abrindo pedido...');
    cy.valorVariavelArmazenar(693, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.valorVariavelArmazenar(2, 'politicaprazoid');
    cy.balcaoPedidoAbrir('contaid', '', 'vendedorid', 'politicaprazoid');
    cy.log('Pedido aberto...');

    cy.log('Inserindo item...');
    cy.valorVariavelArmazenar('ITEM', 'produtoid');
    //cy.valorVariavelArmazenar(30, 'desconto');
    cy.balcaoPedidoItemInserirBloqueioMargem('produtoid','desconto');
    //cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.DESCONTO_ITEM).select(desconto).should('have.value', '30');
    //cy.log('Item inserido...');

  })

})
