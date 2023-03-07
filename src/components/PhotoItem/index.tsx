import { useState, useEffect } from 'react';

import { Photo } from '../../types/Photo';
import * as C from './styles';

type Props = {
    photo: Photo,
    setPhotoItem: (photo: Photo) => void,
    onDelete: (name: string) => void
}
export const PhotoItem = ({ photo, setPhotoItem, onDelete }: Props) => {
    const [name, setName] = useState('');
    const [format, setFormat] = useState('');

    useEffect(() => {
        let [nameAux, formatAux] = photo.name.split('.');
        setName(nameAux);
        setFormat(formatAux);
    }, []);

    const handleShowDateil = () => {
        document.body.style.overflow = 'hidden';
        setPhotoItem(photo);
    }

    const handleDelete = () => {
        console.log('passou aqui')
        onDelete(photo.name);
    }

    return (
        <C.Container>
            <img src={photo.url} alt='' onClick={handleShowDateil}/>
            <div className='infos'>
                <div className='photo-name'>{name}</div>
                <div className='rightSide-content'>
                    <button onClick={handleDelete}>Deletar</button>
                    <div className='photo-format'>{format}</div>
                </div>
            </div>
        </C.Container>
    );
}