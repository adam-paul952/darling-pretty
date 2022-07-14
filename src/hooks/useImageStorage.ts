import { Storage } from "aws-amplify";

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
      const storageImages = await Storage.list("");
      console.log(storageImages);
      return storageImages;
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
