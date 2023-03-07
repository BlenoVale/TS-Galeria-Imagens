import React, { useEffect, useState } from 'react';
import * as C from './styles';

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

type Props = {
    file?: File,
    setFile: (file: File)=> void,
    onFileSubmit: ()=> void,
}
export const Button = ({ file, setFile,  onFileSubmit}: Props) => {
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            let fileAux = e.target.files[0];
            setFile(fileAux)
        }
    }

    const handleClick = () => {
        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    }
    return (
        <C.Container>
            {file &&
                <>
                    <C.UploadFileName>Arquivo "{file && file.name}" carregado</C.UploadFileName>
                    <C.Button onClick={onFileSubmit}>
                        <DriveFolderUploadIcon />
                        Enviar
                    </C.Button>
                </>
            }
            <C.Button onClick={handleClick}>
                <CreateNewFolderIcon />
                Adicionar Imagem
            </C.Button>
            <C.HiddenInput
                type='file'
                ref={hiddenFileInput}
                onChange={handleChange}
            />
        </C.Container>
    );
}