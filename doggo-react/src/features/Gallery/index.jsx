import { useContext, useEffect } from "react";
import { Button } from "../../components/Button";
import Form from "../../components/Form";
import Heading from "../../components/Heading";
import { Field, Select } from "../../components/Inputs";
import { List } from "../../components/List";
import { BreedsContext } from "../../context/Breeds";

const Gallery = () => {
  const { getBreeds, breedList, getBreedImages, BreedImages } =
    useContext(BreedsContext);

  const onSubmit = (formData) => {
    const selectedBreed = formData.get("select");

    if (!selectedBreed) return;

    getBreedImages(selectedBreed);
    console.log("submitowane");
  };

  useEffect(() => {
    if (breedList) return;
    getBreeds();
  }, [breedList, getBreeds]);

  if (!breedList) return "Loading...";

  return (
    <div className="container">
      <header className="header mb-1">
        <Form onSubmit={onSubmit}>
          <Heading size={"big"}>Choose breed</Heading>
          <Field label="Breed">
            {breedList && <Select name="select" breedList={breedList}></Select>}
          </Field>
          <Button>Submit</Button>
        </Form>
      </header>

      <main className="main">
        {console.log(BreedImages)}
        {BreedImages ? <List images={BreedImages} hasBtn={false}></List> : ""}
        <section className="gallery gallery--favourites"></section>
      </main>
    </div>
  );
};

export default Gallery;
