import { CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Header } from './components/Header';
import { ItemDetail } from './components/ItemDetail';
import { PhotoGrid } from './components/PhotoGrid';
import { WarningMessage } from './components/WarningMessage';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';

const App = () => {
  const [file, setFile] = useState<File>();
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [photoItem, setPhotoItem] = useState<Photo>();

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    setLoading(1);
    setPhotos(await Photos.getAll());
    setLoading(0);
  }

  const getPhotosByName = async (name: string) => {
    setLoading(1);
    setPhotos(await Photos.getByName(name));
    setLoading(0);
  }

  const handleSubmit = async () => {
    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);
      setFile(undefined);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result as Photo);
        setPhotos(newPhotoList);
      }
    }
  }

  const handleDeleteImg = async (name: string) => {
    await Photos.deleteImg(name);
    getPhotos();
    console.log('aqui também')
  }

  return (
    <C.Container>
      <Header 
        file={file} 
        setFile={setFile} 
        onFileSubmit={handleSubmit}
        onSearch={getPhotosByName}
        />
      <C.Main loading={loading}>
        {loading === 1 ? <CircularProgress /> : undefined}
        {loading === 0 && photos.length === 0 ? <WarningMessage /> : undefined}
        {loading === 0 && photos.length > 0 ?
          <PhotoGrid
            photos={photos}
            setPhotoItem={setPhotoItem}
            onDelete={handleDeleteImg}
          /> : undefined}
      </C.Main>

      {photoItem != undefined ? <ItemDetail
        photoItem={photoItem}
        setPhotoItem={setPhotoItem} /> : undefined}
    </C.Container>
  );
}

export default App;