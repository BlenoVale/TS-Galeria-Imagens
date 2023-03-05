import * as C from './styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const WarningMessage = () => {
    return(
        <C.Container>
            <SentimentVeryDissatisfiedIcon style={{color:'#3899ed', width: '100px', height: '100px'}} />
            <C.Desc>Não há fotos cadastradas.</C.Desc>
        </C.Container>
    );
}