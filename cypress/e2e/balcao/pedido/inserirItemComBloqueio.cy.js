import CONSTANTES from '../../../support/locators';

describe('Balcão > Pedido > Inserção de item', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Pedido > Fechar carrinho com bloqueio de estoque negativo', () =>
  {
    cy.log('Alterando para Empresa 1, Filial 1...');
    cy.trocaEmpresaFilial(1, 1);
    cy.log('Troca efetuada...');

    cy.log('Abrindo pedido...');
    cy.valorVariavelArmazenar(804, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    //cy.valorVariavelArmazenar(1, 'politicaprazoid');
    cy.balcaoPedidoAbrir('contaid', '', 'vendedorid', '');
    cy.log('Pedido aberto...');
    
    cy.log('Inserindo item...');
    cy.valorVariavelArmazenar('ITEM1', 'produtoid');
    cy.balcaoPedidoItemInserirBloqueioEstoqueNegativo('produtoid');
    cy.log('Item bloqueado...');
    
    //cy.balcaoPedidoSituacaoStatusVerificar('Aberto', 'Bloqueado');
  })
  //###### Final do bloco de testes - alterar aqui ######

})