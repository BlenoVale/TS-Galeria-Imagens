import { useState } from 'react';
import * as C from './styles';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    onSearch: (nome: string) => void
}
export const Search = ({onSearch}: Props) => {
    const [name, setName] = useState('');

    return (
        <C.Container>
            <SearchIcon style={{color: '#3899ed'}} />
            <C.Input  
            type='search' 
            placeholder='Buscar'
            value={name}
            onChange={e=>setName(e.target.value)}
            />
            {/*<button onClick={e=>onSearch(name)}>pesquisar</button>*/}
        </C.Container>
    );
}