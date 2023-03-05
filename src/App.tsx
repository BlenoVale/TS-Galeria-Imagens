import { async } from '@firebase/util';
import { CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Header } from './components/Header';
import { PhotoGrid } from './components/PhotoGrid';
import { WarningMessage } from './components/WarningMessage';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';

const App = () => {
  const [loading, setLoading] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(1);
      setPhotos(await Photos.getAll());
      setLoading(0);
    }
    getPhotos();
  }, []);

  return (
    <C.Container>
      <Header />
      <C.Main loading={loading}>
        {loading === 1 ? <CircularProgress /> : undefined}
        {loading === 0 && photos.length === 0 ? <WarningMessage /> : undefined}
        {loading === 0 && photos.length > 0 ? <PhotoGrid photos={photos} /> : undefined}
      </C.Main>
    </C.Container>
  );
}

export default App;