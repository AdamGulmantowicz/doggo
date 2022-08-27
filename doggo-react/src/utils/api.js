const BASE_URL = "https://dog.ceo/api/";

const API = {
  GET_ALL_BREEDS() {
    return BASE_URL + "breeds/list/all";
  },
  GET_BREED_IMGS(breed) {
    return BASE_URL + "breed/" + breed + "/images";
  },
};

export default API;
