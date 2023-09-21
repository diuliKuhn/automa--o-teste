import CONSTANTES from '../locators';
import CAMPOS from './locatorsRequisicao';  

Cypress.Commands.add('requisicaoSeparar', (situacao) =>
{
    cy.visit (CONSTANTES.SISTEMA.URL.ESTOQUE.LISTA_REQUISICOES);
    cy.wait(1000);
    //cy.get(CAMPOS.CONSULTA.FILTRO_STATUS).select('Aguardando').should('have.value', 'Aguardando');
    cy.get(CAMPOS.CONSULTA.FILTRO_STATUS).select('Aguardando');
    cy.wait(1000);
    cy.get(CAMPOS.CONSULTA.PESQUISAR_REQUISICAO).click();
    cy.wait(2000);
    cy.get(CAMPOS.CONSULTA.EDITAR_REQUISICAO).click();
    cy.wait(2000);
    cy.get(CAMPOS.PROCESSO.INICIAR_SEPARACAO).click();
    cy.wait(3000);
    //aguardarPopUpSeparacao(0);
    cy.aguardarExistir(CAMPOS.PROCESSO.POPUP_CONFIRMAR_SEPARACAO, 1000); // popup fake, não reconhece botão de Confirmar
    cy.get(CAMPOS.PROCESSO.CONFIRMAR_SEPARACAO).click(); 
    cy.wait(1000);
    cy.get(CAMPOS.PROCESSO.ABA_ITENS).click();
    cy.wait(1000);
    cy.get(CAMPOS.PROCESSO.EDITAR_ITEM).click();
    cy.valorAtribuir(CAMPOS.PROCESSO.QUANTIDADE_SEPARACAO, '1,0000');
    cy.get(CAMPOS.PROCESSO.SALVAR_QUANTIDADE_SEPARACAO).click();
    cy.get(CAMPOS.PROCESSO.ABA_SEPARACAO_GUARDA).click();
    cy.get(CAMPOS.PROCESSO.FINALIZAR_ETAPA_ATUAL).click();
    cy.wait(1000);
    cy.get(CAMPOS.PROCESSO.FLAG_ENTREGA_REALIZADA).click();

})

// function aguardarPopUpSeparacao(contador)
// {
//     if (contador <= 500)
//     {
//         cy.wait(contador);
//         cy.get('body').then(($body) =>
//         {
            
//             if ($body.find('#gxp0_gxtitle').length)
//             {
//                 cy.get(CAMPOS.PROCESSO.CONFIRMAR_SEPARACAO).click('have.tittle', 'Confirmar');
//                 return;
//             }
//             else
//             {
//                 contador += 100;
//                 aguardarPopUpSeparacao(contador);
//             }
            
//         });
//     }
//     return;
// }