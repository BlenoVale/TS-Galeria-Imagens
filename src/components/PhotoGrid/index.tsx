import { Photo } from '../../types/Photo';
import { PhotoItem } from '../PhotoItem';
import * as C from './styles';

type Props = {
    photos: Photo[],
    setPhotoItem: (photo: Photo) => void,
    onDelete: (name: string) => void
}
export const PhotoGrid = ({ photos, setPhotoItem, onDelete }: Props) => {
    return (
        <C.Container>
            {photos.map((item, index) => (
                <PhotoItem 
                key={index} 
                photo={item} 
                setPhotoItem={setPhotoItem}
                onDelete={onDelete}
                />
            ))}
        </C.Container>
    );
}