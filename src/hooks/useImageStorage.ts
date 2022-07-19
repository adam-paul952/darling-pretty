import { Storage } from "aws-amplify";

interface IImageObject {
  key?: string;
  eTag?: string;
  lastModified?: Date;
  size?: number;
}

const useImageStorage = () => {
  const uploadImageToStorage = async (imageData: any) => {
    try {
      await Storage.put(imageData.name, imageData, {
        contentType: imageData.type,
        progressCallback: (progress) => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const listStorageItems = async () => {
    try {
      const images: IImageObject[] = [];
      const storageImages = await Storage.list("");
      storageImages.forEach((image) => {
        if (image.size! > 0) {
          images.push(image);
        }
      });
      return images;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    uploadImageToStorage,
    listStorageItems,
  };
};

export default useImageStorage;
