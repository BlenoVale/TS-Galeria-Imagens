import * as C from './styles';

export const UploadBtn = () => {
    return(
        <C.Container>
            <C.UploadFileName>Nome do arquivo carregado</C.UploadFileName>
            <C.Button>Adicionar Imagem</C.Button>
        </C.Container>
    );
}