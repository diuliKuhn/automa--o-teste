const CAMPOS =
{
    CONSULTA:
    {
        INSERIR_OS: '[id$=BTNINSERT]', //'BTNBTNINSERT'
        CODINT_OS: '#vOFI21PEDIDOID', // [id$=PEDIDOID]
        PESQUISAR_OS: '#IMGPESQUISA', //'[id$=IMGPESQUISA]'
        LIMPAR_FILTROS: '#CLEANFILTERS', //'[ID$=CLEANFILTERS]',
        CONSULTAR_OS: '#vCONSULTAR_0001',
        EDITAR_OS: '#vEDITAR_0001',
        
    },
    ABERTURA:
    {
        CLIENTE_ID: '#OFI21CLIENTEID', //#OFI21CLIENTEID
        TIPO_OS: '[ID$=TIPOID]', //#OFI21ORDEMSERVICOTIPOID
        CLASSIFICACAO: '#OFI21CLASSIFICACAOID', //#OFI21CLASSIFICACAOID
        ENDERECO_ID: '#OFI21CLIENTEENDERECOID' , //#OFI21CLIENTEENDERECOID
        VEICULO: '#OFI21VEICULOID', //#OFI21VEICULOID
        DESCRICAO_PROBLEMA: '[ID$=PROBLEMADESCRICAO]',// #OFI21PROBLEMADESCRICAO
        DATA_PREVISAO: '[ID$=DATAPREVISTA]', // OFI21DATAPREVISTA
        VENDEDOR_ID: '#OFI21VENDEDORID', //#OFI21VENDEDORID
        MECANICO_ID: '#OFI21MECANICOID', //#OFI21MECANICOID 
        BOTAO_SALVAR: '#BTNTRN_ENTER' , //#BTNTRN_ENTER
        FONE_CONTATO: '#OFI21CONTATOFONE', // [ID$=#OFI21CONTATOFONE]
        BOTÃO_FECHAR: '#BTNFECHAR'
    },
    ABA_VEICULO:
    {
        ABA_VEICULO: '#Tab_GXUITABSPANEL_TABSContainerpanel4',
        EDITAR_VEICULO: '#EDITARVEICULO',
        DESCRICAO_PROBLEMA: '#W0304OFI21PROBLEMADESCRICAO',
        OPINIAO_PROBLEMA: '#W0304OFI21PROBLEMAOPINIAO',
        SOLUCAO_PROBLEMA: '#W0304OFI21PROBLEMASOLUCAO',
        SALVAR_VEICULO: '#W0304BTNTRN_ENTER',
        EDITAR_GERAL: '#EDITARGERAL',
    },
    ABA_SERVIÇOS:
    {
        ABA_SERVIÇOS: '#Tab_GXUITABSPANEL_TABSContainerpanel5',
    }

}

export default CAMPOS;