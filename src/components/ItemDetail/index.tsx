import { Photo } from '../../types/Photo';
import * as C from './styles';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    photoItem?: Photo,
    setPhotoItem: (photoItem: Photo | undefined) => void
}
export const ItemDetail = ({ photoItem, setPhotoItem }: Props) => {

    const handleCloseDetail = () => {
        document.body.style.overflow = 'auto';
        setPhotoItem(undefined);
    }

    return (
        <C.Container>
            <C.DetailArea>
                <C.HeaderDetail>
                <C.Name>{photoItem && photoItem.name}</C.Name>
                <C.OpBtn onClick={handleCloseDetail}><CloseIcon sx={{ fontSize: 50 }} /></C.OpBtn>
                </C.HeaderDetail>
                <C.ImgArea>
                    <C.Img src={photoItem && photoItem.url} />
                </C.ImgArea>
            </C.DetailArea>
        </C.Container>
    );
}