//let URL_BASE = 'http://localhost/ERPSolution17PosAjustesJava/servlet/';
let URL_BASE = 'http://192.168.9.192/TestesFuncionais/servlet/';
let URL_BASE_SERVICO = 'http://localhost/ERPSolution16Java/rest/';

const CONSTANTES =
{
    SISTEMA:
    {
        BANCO: '192.168.9.224:5432/#CLI_AGROFEL_070623#', //'192.168.8.25:5432/#CLI_AUTOMACAO_TESTES_OKR_NAO_USAR#',

        URL:
        {
            LOGIN: URL_BASE + 'erpsolution.ambiente.secloginerpsolution',
            TROCA_EMPRESA_FILIAL: URL_BASE + 'erpsolution.ambiente.wptrocaempresafilialperfil',
            DASHBOARD: URL_BASE + 'erpsolution.ambiente.wpdashboard',

            COMPRAS:
            {
                PAINEL_LIBERACOES_APROVACOES: URL_BASE + 'erpsolution.vendas.erppainelliberacoesaprovacoesconsultar'
            },

            ESTOQUE:
            {
                AJUSTE_QUANTIDADE: URL_BASE + 'erpsolution.estoque.estlanctoajuste',
                AJUSTE_CUSTO_MEDIO: URL_BASE + 'erpsolution.estoque.estlanctoajustecustomedio'
            },

            BALCAO:
            {
                CONSULTA_ORCAMENTO: URL_BASE + 'erpsolution.balcao.varorcamentoconsultar',
                CONSULTA_ORDEM_DE_COMPRA: URL_BASE + 'erpsolution.balcao.varordemcompraconsultar',
                CONSULTA_PEDIDO: URL_BASE + 'erpsolution.balcao.varpedidoconsultar',
                CONSULTA_FATURA: URL_BASE + 'erpsolution.balcao.varfaturaconsultar'
            },
            
            OFICINA:
            {
                CONSULTA_ORCAMENTO: URL_BASE + 'erpsolution.oficina.ofiorcamentoconsultar',
                CONSULTA_OS: URL_BASE + 'erpsolution.oficina.ofipedidoconsultar',
                CONSULTA_FATURA: URL_BASE + 'erpsolution.oficina.ofifaturaconsultar'
            },
            
            MAQUINAS:
            {
                CONSULTA_NEGOCIO: URL_BASE + 'erpsolution.vendas.fvenegocioconsultar',
                CONSULTA_ORCAMENTO: URL_BASE + 'erpsolution.maquinas.gpeorcamentoconsultar',
                CONSULTA_PEDIDO: URL_BASE + 'erpsolution.maquinas.gpepedidoconsultar',
                CONSULTA_FATURA: URL_BASE + 'erpsolution.maquinas.gpepedidofaturamentoconsultar'
            },

            RANDOMIZACAO:
            {
                CONTA: URL_BASE_SERVICO + 'CRM/crmContaTesteRegistroRandomizar'
            },
        }
    },

    PROPRIEDADES:
    {
        CONTA:
        {
            TIPO_CONTA:
            {
                INDEFINIDO: '#',
                CLIENTE: 'C',
                FORNECEDOR: 'F',
            },

            TIPO_PESSOA:
            {
                INDEFINIDO: '#',
                PESSOA_FISICA: 'F',
                PESSOA_JURIDICA: 'J',
            },

            UF:
            {
                AC: 'AC',
                AL: 'AL',
                AM: 'AM',
                AP: 'AP',
                BA: 'BA',
                CE: 'CE',
                DF: 'DF',
                ES: 'ES',
                EX: 'EX',
                GO: 'GO',
                MA: 'MA',
                MG: 'MG',
                MS: 'MS',
                MT: 'MT',
                PA: 'PA',
                PB: 'PB',
                PE: 'PE',
                PI: 'PI',
                PR: 'PR',
                RJ: 'RJ',
                RN: 'RN',
                RO: 'RO',
                RR: 'RR',
                RS: 'RS',
                SC: 'SC',
                SE: 'SE',
                SP: 'SP',
                TO: 'TO',
            },

            TIPO_CONTRIBUINTE_FEDERAL:
            {
                CONTRIBUINTE_NORMAL: 'N',
                CONSUMIDOR_FINAL: 'F',
                ICMST_ESPECIAL: 'E',
                CONTRIBUINTE_REVENDEDOR: 'R',
                INDUSTRIA: 'I',
                SIMPLES_NACIONAL: 'S',
                PRODUTOR_RURAL: 'P',
                CONTRIBUINTE_CONSUMIDOR_FINAL: 'C',
                COOPERADO: 'O',
                ORGAO_PUBLICO: 'A',
                FILIAL: 'L',
                ZONA_FRANCA_MANAUS: 'Z',
            },

            TIPO_CONTRIBUINTE_ESTADUAL:
            {
                CONTRIBUINTE_NORMAL: 'N',
                CONSUMIDOR_FINAL: 'F',
                ICMST_ESPECIAL: 'E',
                CONTRIBUINTE_REVENDEDOR: 'R',
                INDUSTRIA: 'I',
                SIMPLES_NACIONAL: 'S',
                PRODUTOR_RURAL: 'P',
                CONTRIBUINTE_CONSUMIDOR_FINAL: 'C',
                COOPERADO: 'O',
                ORGAO_PUBLICO: 'A',
                FILIAL: 'L',
                ZONA_FRANCA_MANAUS: 'Z',
            },
        },
    },
}

export default CONSTANTES;