import CONSTANTES from '../../../support/locators';

describe('Balcão > Pedido > Fechar carrinho com bloqueio', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Pedido > Fechar carrinho com bloqueio limite de crédito vendas à prazo', () =>
  {
    cy.log('Alterando para Empresa 1, Filial 1, configurada para bloquear ao fechar o carrinho...');
    cy.trocaEmpresaFilial(1, 1);
    cy.log('Troca efetuada...');

    cy.log('Abrindo pedido...');
    cy.valorVariavelArmazenar(805, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.valorVariavelArmazenar(2, 'politicaprazoid');
    cy.balcaoPedidoAbrir('contaid', '', 'vendedorid', 'politicaprazoid');
    cy.log('Pedido aberto...');
    
    cy.log('Inserindo item...');
    cy.valorVariavelArmazenar('ITEM', 'produtoid');
    cy.balcaoPedidoItemInserir('produtoid');
    cy.log('Item inserido...');
    
    cy.log('Fechando carrinho...');
    cy.balcaoPedidoCarrinhoFechar();
    cy.log('Carrinho fechado...');
    
    cy.balcaoPedidoSituacaoStatusVerificar('Aberto', 'Bloqueado');
  })

  it('Balcão > Pedido > Fechar carrinho com bloqueio limite de crédito vendas à vista', () =>
  {
    cy.log('Alterando para Empresa 1, Filial 1, configurada para bloquear ao fechar o carrinho...');
    cy.trocaEmpresaFilial(1, 1);
    cy.log('Troca efetuada...');

    cy.log('Abrindo pedido...');
    cy.valorVariavelArmazenar(805, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    //cy.valorVariavelArmazenar(1, 'politicaprazoid');
    cy.balcaoPedidoAbrir('contaid', '', 'vendedorid', '');
    cy.log('Pedido aberto...');
    
    cy.log('Inserindo item...');
    cy.valorVariavelArmazenar('ITEM', 'produtoid');
    cy.balcaoPedidoItemInserir('produtoid');
    cy.log('Item inserido...');
    
    cy.log('Fechando carrinho...');
    cy.balcaoPedidoCarrinhoFechar();
    cy.log('Carrinho fechado...');
    
    cy.balcaoPedidoSituacaoStatusVerificar('Aberto', 'Bloqueado');
  })


  //###### Final do bloco de testes - alterar aqui ######

})