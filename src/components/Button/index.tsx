import React from 'react';
import * as C from './styles';

type Props = {
    btnName: string
}
export const Button = ({ btnName }: Props) => {
    const hiddenFileInput = React.useRef(null);

    const handlesubmit = () => {

    }

    return (
        <C.Container method='POST' onSubmit={handlesubmit}>
            <C.UploadFileName>Nome do arquivo carregado</C.UploadFileName>
            <C.Button>{btnName}</C.Button>
            <input

            />
        </C.Container>
    );
}