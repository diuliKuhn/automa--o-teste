import CONSTANTES from '../../support/locators';

describe('empty spec', () =>
{
    it('passes', () =>
    {
        cy.task('executaQuery','select count(*) as conta from empresa').then((res)=>
        {
            cy.log(res[0].conta);
        })

        //cy.randomizarConta(CONSTANTES.PROPRIEDADES.CONTA.TIPO_CONTA.CLIENTE, CONSTANTES.PROPRIEDADES.CONTA.TIPO_PESSOA.PESSOA_FISICA, CONSTANTES.PROPRIEDADES.CONTA.UF.RS, CONSTANTES.PROPRIEDADES.CONTA.TIPO_CONTRIBUINTE_ESTADUAL.CONSUMIDOR_FINAL, CONSTANTES.PROPRIEDADES.CONTA.TIPO_CONTRIBUINTE_FEDERAL.CONSUMIDOR_FINAL);

    })
})