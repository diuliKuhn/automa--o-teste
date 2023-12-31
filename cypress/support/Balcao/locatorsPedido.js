const CAMPOS =
{
    CONSULTA:
    {
        BOTAO_INSERIR: '#BTNBTNINSERT',
        LIMPAR_FILTRO: '#CLEANFILTERS'


    },
    GERACAO:
    {
        WIZARD_1_ABERTURA:
        {
            PAINEL_GERAL: '#Title_W0021DVPANEL_UNNAMEDTABLE1Container',
            CLIENTE_ID: '#W0021W0020VAR20CLIENTEID',//'[id$=VAR20CLIENTEID]',
            ENDERECO_ID: '#W0021W0020VAR20CLIENTEENDERECOID',//'[id$=VAR20CLIENTEENDERECOID]',
            VENDEDOR_ID: '#W0021W0020VAR20VENDEDORID',//'[id$=VAR20VENDEDORID]'
            POLITICAPRAZO_ID: '#W0021W0020VAR20POLPRAZOID',//'[id$=]VAR20POLPRAZOID',
            TABDESC_ID: '#W0021W0020VAR20DESCONTOID',
            PEDIDO_ID: '[id$=vVAR20PEDIDOID]',//'#W0021W0012vVAR20PEDIDOID'
            PESQUISAR_PEDIDO: '#IMGPESQUISA', 
            BOTAO_SEGUINTE: '[id$=BTNTRN_ENTER]' //W0021W0020BTNTRN_ENTER 
        },

        WIZARD_2_ITENS:
        {
            PEDIDO_ID: '[id$=vVAR20PEDIDOID]',//'#W0021W0012vVAR20PEDIDOID'
            PESQUISAR: '[id$=ENTER]',
            EDITAR: '#vEDITAR_0001',
            COD_PRODUTO: '#W0021W0012vE18CODPRO',
            PESQUISAR_PRODUTO: '#W0021W0012ENTER',//'[id$=BTNTRN_ENTER]'
            PESQUISAR_PEDIDO: '#IMGPESQUISA',
            BOTAO_SALVAR: '[id$=BTNTRN_ENTER]', //W0021W0012W0453BTNTRN_ENTER
            ADICIONAR_PROD: '#W0021W0012vADICIONAR_0001',
            //TABLE_PRINCIPAL: '[id$=TABLEPRINCIPAL]',
            BOTAO_FECHAR_CARRINHO: '[id$=BTNWIZARDSEGUINTE]',
            MOTIVO_ALOCACAO: '[id$=vMOTIVO]', //W0021W0012W0453W0398vMOTIVO'
            LIBERAR_ALOCACAO: '[id$=vLIBERAR]',//W0021W0012W0453W0398vLIBERAR
            DESCONTO_ITEM: 'W0021W0012W0453VAR21DESCONTOPERC',
            VENDA_PERDIDA: 'W0021W0012BTNPERDER'
        },

        WIZARD_3_OUTROS:
        {
            PEDIDO_ID: '[id$=vVAR20PEDIDOID]',//'#W0021W0012vVAR20PEDIDOID',
            PESQUISAR: '#IMGPESQUISA',
            EDITAR: '#vEDITAR_0001',
            EDITAR_TOTAIS: '#W0021EDITARTOTAIS',
            BOTAO_SEGUINTE: '#W0021BTNWIZARDNEXT',
        },

        WIZARD_4_BLOQUEIOS:
        {
            PEDIDO_ID: '[id$=vVAR20PEDIDOID]',//'#W0021W0012vVAR20PEDIDOID',
            PESQUISAR: '#IMGPESQUISA',
            EDITAR: '#vEDITAR_0001',
            EDITAR_TOTAIS: '#W0021EDITARTOTAIS',
            BOTAO_SEGUINTE: '#W0021BTNWIZARDNEXT',

            BOTAO_ANTERIOR: '#W0021BTNWIZARDPREVIOUS',
            //BOTAO_SEGUINTE: '#W0021BTNWIZARDNEXT',
            
        },

        WIZARD_5_REQUISICAO:
        {
            PEDIDO_ID: '[id$=vVAR20PEDIDOID]',//'#W0021W0012vVAR20PEDIDOID',
            PESQUISAR: '#IMGPESQUISA',
            EDITAR: '#vEDITAR_0001',
            GERAR_REQUISICAO: '#W0021BTNGERARREQUISICAO',
        },

        WIZARD_6_CONFIRMACAO:
        {

 

        }
    }
}

 

export default CAMPOS;