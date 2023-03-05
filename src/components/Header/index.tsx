 import { Search } from '../Search';
import { Button } from '../Button';
import * as C from './styles';

 export const Header = () => {
    return (
        <C.Container>
            <C.ContentArea>
                <C.Title>Galeria de Fotos</C.Title>
                <C.Options>
                    <Search />
                    <Button btnName={'Adicionar Imagem'}/>
                </C.Options>
            </C.ContentArea>
        </C.Container>
    );
 }