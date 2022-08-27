import React from "react";
import useFetch from "../hooks/useFetch";
import API from "../utils/api";

export const BreedsContext = React.createContext(null);

export const BreedsProvider = ({ children }) => {
  const breedListReq = useFetch();
  const breedImagesReq = useFetch();

  const getBreeds = () => {
    if (breedListReq.isLoading) return;
    breedListReq.run(API.GET_ALL_BREEDS());
  };

  const getBreedImages = (selectedBreed) => {
    if (breedImagesReq.isLoading) return;
    breedImagesReq.run(API.GET_BREED_IMGS(selectedBreed));
  };

  return (
    <BreedsContext.Provider
      value={{
        getBreeds,
        breedList: breedListReq.data,
        getBreedImages,
        breedImages: breedListReq.data,
      }}
    >
      {children}
    </BreedsContext.Provider>
  );
};
