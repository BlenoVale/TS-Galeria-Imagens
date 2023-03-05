 import { Search } from '../Search';
import { UploadBtn } from '../UploadBtn';
import * as C from './styles';

 export const Header = () => {
    return (
        <C.Container>
            <C.ContentArea>
                <C.Title>Galeria de Imagens</C.Title>
                <C.Options>
                    <Search />
                    <UploadBtn />
                </C.Options>
            </C.ContentArea>
        </C.Container>
    );
 }