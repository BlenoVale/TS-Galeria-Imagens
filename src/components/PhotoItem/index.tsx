import { useState, useEffect } from 'react';

import { Photo } from '../../types/Photo';
import * as C from './styles';

type Props = {
    photo: Photo
}
export const PhotoItem = ({ photo }: Props) => {
    const [name, setName] = useState('');
    const [format, setFormat] = useState('');

    useEffect(() => {
        let [nameAux, formatAux] = photo.name.split('.');
        setName(nameAux);
        setFormat(formatAux);
    }, []);
    return (
        <C.Container>
            <img src={photo.url} alt='' />
            <div className='infos'>
                <div className='photo-name'>{name}</div>
                <div className='photo-format'>{format}</div>
            </div>
        </C.Container>
    );
}