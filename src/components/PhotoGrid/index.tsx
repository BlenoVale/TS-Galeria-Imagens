import { Photo } from '../../types/Photo';
import { PhotoItem } from '../PhotoItem';
import * as C from './styles';

type Props = {
    photos: Photo[]
}
export const PhotoGrid = ({ photos }: Props) => {
    return (
        <C.Container>
            {photos.map((item, index) => (
                <PhotoItem key={index} photo={item} />
            ))}
        </C.Container>
    );
}