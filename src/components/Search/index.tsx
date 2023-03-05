import * as C from './styles';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {

    return (
        <C.Container>
            <SearchIcon style={{color: '#3899ed'}} />
            <C.Input  type='search' placeholder='Buscar'/>
        </C.Container>
    );
}