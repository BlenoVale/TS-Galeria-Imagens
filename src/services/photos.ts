import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as createId } from 'uuid';

export const getAll = async () => {
    let list: Photo[] = [];
    try {
        const imagesFolder = ref(storage, "images");
        const photoList = await listAll(imagesFolder);

        for (let i in photoList.items) {
            let photoUrl = await getDownloadURL(photoList.items[i]);

            list.push({
                name: photoList.items[i].name,
                url: photoUrl
            });
        }
    } catch (error) {
        console.log('Erro no services>photos>getAll: ', error);
    }
    return list;
}

export const insert = async (file: File) => {
    try {
        if (['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type)) {

            let newFile = ref(storage, `images/${file.name}`)
            let upload = await uploadBytes(newFile, file);
            let photoUrl = await getDownloadURL(upload.ref);

            return {
                name: upload.ref.name,
                url: photoUrl
            } as Photo;

        } else {
            return new Error('Tipo de arquivo não permitido');
        }
    } catch (error) {
        console.log('Erro no services>photos>insert: ', error);
    }
}

export const deleteImg = async (imgName: string) => {
    try {
        const imgRef = ref(storage, `images/${imgName}`);
        await deleteObject(imgRef);
    } catch (error) {
        console.log('Erro no services>photos>deleteImg: ', error);
    }

}

export const getByName = async (imgName: string) => {
    let list: Photo[] = [];
    try {
        const imagesFolder = ref(storage, `images/${imgName}`);
        const photoList = await listAll(imagesFolder);
        console.log(photoList);

        for (let i in photoList.items) {
            let photoUrl = await getDownloadURL(photoList.items[i]);

            list.push({
                name: photoList.items[i].name,
                url: photoUrl
            });
        }
    } catch (error) {
        console.log('Erro no services>photos>getByName: ', error);
    }
    return list;
}