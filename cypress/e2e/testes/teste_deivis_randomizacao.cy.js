import CONSTANTES from '../../support/locators';

let conta = 0;


describe('Teste Deivis Request', () =>
{
    beforeEach(() =>
    {
        cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
    })

    

    //###### Início do bloco de testes - alterar aqui ######
    it('Teste Deivis Request' , async () =>
    {
        
        cy.request('POST', 'http://localhost/ERPSolution16Java/rest/CRM/crmContaTesteRegistroRandomizar', {"crmContaFiltroSDT": {"TipoConta":"C","TipoPessoa":"F","UF":"RS","TipoContribuinteFederal":"F","TipoContribuinteEstadual":"F"}}).then((response) =>
        {
            cy.log(response.body);
            conta = response.body['ContaId'];
            cy.log('1 ' + conta);
            
        });

        cy.log('2 ' + conta);

        cy.wrap(conta).then(valor =>
        {
            cy.log('3 ' + valor);
        });

        //cy.log('teste: ' + );

        // cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);
        // cy.get('#Title_DVPANEL_FILTROSContainer').click();
        // cy.get('#CLEANFILTERS').click();
        // cy.get('#vVAR20CLIENTEID').click();

        // // randomizarConta(CONSTANTES.PROPRIEDADES.CONTA.TIPO_CONTA.CLIENTE, CONSTANTES.PROPRIEDADES.CONTA.TIPO_PESSOA.PESSOA_FISICA, CONSTANTES.PROPRIEDADES.CONTA.UF.RS, CONSTANTES.PROPRIEDADES.CONTA.TIPO_CONTRIBUINTE_ESTADUAL.CONSUMIDOR_FINAL, CONSTANTES.PROPRIEDADES.CONTA.TIPO_CONTRIBUINTE_FEDERAL.CONSUMIDOR_FINAL).then((clienteId) =>
        // // {   
        // // });


        // cy.randomizarConta(CONSTANTES.PROPRIEDADES.CONTA.TIPO_CONTA.CLIENTE, CONSTANTES.PROPRIEDADES.CONTA.TIPO_PESSOA.PESSOA_FISICA, CONSTANTES.PROPRIEDADES.CONTA.UF.RS, CONSTANTES.PROPRIEDADES.CONTA.TIPO_CONTRIBUINTE_ESTADUAL.CONSUMIDOR_FINAL, CONSTANTES.PROPRIEDADES.CONTA.TIPO_CONTRIBUINTE_FEDERAL.CONSUMIDOR_FINAL).then((contaId) =>
        // {
        //     cy.log(contaId);
        //     cy.get('#vVAR20CLIENTEID').type(contaId);
        // })
        // cy.get('#IMGPESQUISA').click();

    })
})