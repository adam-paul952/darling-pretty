// import React from "react";
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
      const images: any[] = [];
      const storageImages = await Storage.list("");
      for (let i = 1; i < storageImages.length; i++) {
        // console.log(storageImages[i]);
        const imageUrl: string = await Storage.get(storageImages[i].key!);
        images.push({ key: storageImages[i].key!, url: imageUrl });
      }
      // storageImages.forEach((image) => {
      //   if (image.size! > 0) {
      //     images.push(image);
      //   }
      // });
      return images;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    uploadImageToStorage,
    listStorageItems,
    // listOfImages,
  };
};

export default useImageStorage;
