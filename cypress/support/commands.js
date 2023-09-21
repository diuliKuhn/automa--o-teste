// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import CONSTANTES from './locators'

//#region Utilitários
Cypress.Commands.add('login', (usuario, senha, usuario_solution, senha_solution) =>
{
    cy.session([usuario, senha, usuario_solution, senha_solution], () =>
    {
        cy.visit(CONSTANTES.SISTEMA.URL.LOGIN);
        atribuirValorRecursivo('#vC41IDENTI', usuario);
        if(senha != '')
        {
            atribuirValorRecursivo('#vSENHA', senha);
        }
        cy.get('#ENTER').click();
        atribuirValorRecursivo('#W0093vUSUARIO', usuario_solution);
        if(senha_solution != '')
        {
            atribuirValorRecursivo('#W0093vSENHA', senha_solution);
        }
        cy.get('#W0093BTNENTER').click();
        cy.url().should('contain', 'wpdashboard');
    })
})

Cypress.Commands.add('trocaEmpresaFilial', (empresa, filial) =>
{
    let empresa_char  = empresa.toString();
    let filial_char = filial.toString();
    cy.visit(CONSTANTES.SISTEMA.URL.DASHBOARD);
    cy.visit(CONSTANTES.SISTEMA.URL.TROCA_EMPRESA_FILIAL);

    cy.get('#vE01CODIGO').invoke('val').then((empresa_atual) =>
    {
        cy.log('emp atual: ' + empresa_atual);
        cy.log('emp: ' + empresa);
        if(empresa_atual == empresa)
        {
            cy.get('#vE35FILIAL').invoke('val').then((filial_atual) =>
            {
                cy.log('fil atual: ' + filial_atual);
                cy.log('fil: ' + filial);
                if(filial_atual == filial)
                {
                    cy.log('Empresa e Filial já selecionadas...')
                }
                else
                {
                    trocaEmpresaFilial(empresa_char, filial_char);
                }
            })
        }
        else
        {
            trocaEmpresaFilial(empresa_char, filial_char);
        }
    })
    cy.visit(CONSTANTES.SISTEMA.URL.DASHBOARD);
})

function trocaEmpresaFilial(empresa, filial)
{
    cy.get('#vE01CODIGO').select('0').should('have.value', '0');
    cy.get('#vE01CODIGO').select(empresa).should('have.value', empresa);
    cy.get('#vE35FILIAL').select('0').should('have.value', '0');
    cy.get('#vE35FILIAL').select(filial).should('have.value', filial);
    cy.get('#BTNENTER').click();
}

function randomizarNumero(limite)
{
    return Math.floor(Math.random() * limite);
}

function montaWhere(nomeCampo, valorCampo, filtrosAtuais)
{
    if (valorCampo != '#' && valorCampo != '')
    {
        filtrosAtuais += ((filtrosAtuais != "") ? " AND " : "") + " " + nomeCampo + " = '" + valorCampo + "'";
    }
    return filtrosAtuais;
}

export function atribuirValorRecursivo(nomeCampo, valor)
{
    cy.get(nomeCampo).clear();
    cy.get(nomeCampo).type(valor);
        
    cy.get(nomeCampo).invoke('val').then((valor_temp) =>
    {
        if(valor_temp == valor)
        {
            return;
        }
        else
        {
            cy.wait(100);
            atribuirValorRecursivo(nomeCampo, valor);
        }
    });
}
//#endregion

//#region Randomizações
// export function randomizarConta(tipoConta, tipoPessoa, uf, tipoContribuinteEstadual, tipoContribuinteFederal)
// {
//     return new cy.request('POST', CONSTANTES.SISTEMA.URL.RANDOMIZACAO.CONTA, {"crmContaFiltroSDT": {"TipoConta":tipoConta,"TipoPessoa":tipoPessoa,"UF":uf,"TipoContribuinteFederal":tipoContribuinteFederal,"TipoContribuinteEstadual":tipoContribuinteEstadual}}).then((response) =>
//     {
//         return response.body['ContaId'];
//     })
// }

Cypress.Commands.add('randomizarConta', (nomeArmazenar, tipoConta, tipoPessoa, uf, tipoContribuinteEstadual, tipoContribuinteFederal) =>
{
    let comando = "SELECT t310conta as contaid FROM crp_contas"
    
    let filtros = ""

    filtros = montaWhere('t310tipo_conta_integrada', tipoConta, filtros);
    filtros = montaWhere('t310tipo_pessoa', tipoPessoa, filtros);
    filtros = montaWhere('t310uf', uf, filtros);
    filtros = montaWhere('t310contrib', tipoContribuinteEstadual, filtros);
    filtros = montaWhere('t310tipo_contribuinte_federal', tipoContribuinteFederal, filtros);

    if(filtros != "")
    {
        comando += " WHERE" + filtros
    }

    cy.log(comando);

    cy.task('executaQuery',comando).then((res)=>
    {
        //cy.log('qtd conta ' + res.length);
        let randomico = randomizarNumero(res.length);
        cy.valorVariavelArmazenar(res[randomico].contaid, nomeArmazenar);
        //cy.log(res[randomico].contaid);
    })
})
//#endregion

//#region Testes
//Teste - em construção
Cypress.Commands.add('requestApi', link =>
{
    return new cy.request('POST', link, {"crmContaFiltroSDT": {"TipoConta":tipoConta,"TipoPessoa":tipoPessoa,"UF":uf,"TipoContribuinteFederal":tipoContribuinteFederal,"TipoContribuinteEstadual":tipoContribuinteEstadual}}).then((response) =>
    {
        return response.body['ContaId'];
    })
})
//#endregion

//#region Facilitadores gerais
Cypress.Commands.add('interceptar', (metodo, link, apelido) =>
{
    cy.intercept(metodo, link).as(apelido);
})
//#endregion

