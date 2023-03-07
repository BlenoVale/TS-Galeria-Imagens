 import { Search } from '../Search';
import { Button } from '../Button';
import * as C from './styles';

type Props = {
    file?: File,
    setFile: (file: File)=> void,
    onFileSubmit: ()=> void,
    onSearch: (name: string)=> void
}
 export const Header = ({file, setFile, onFileSubmit, onSearch}: Props) => {
    return (
        <C.Container>
            <C.ContentArea>
                <C.Title>Galeria de Fotos</C.Title>
                <C.Options>
                    <Search onSearch={onSearch}/>
                    <Button file={file} setFile={setFile} onFileSubmit={onFileSubmit}/>
                </C.Options>
            </C.ContentArea>
        </C.Container>
    );
 }