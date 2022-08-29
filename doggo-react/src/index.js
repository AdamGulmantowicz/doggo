import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Loader() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function ImgCard({ path, hasBtn = true, handleClick, isFavourite }) {
  return (
    <div className="card mb-m">
      <figure className="card__img">
        <img src={path} alt="" />
        {hasBtn ? (
          <button
            className={isFavourite ? "btn" : "btn btn--secondary"}
            onClick={(e) => handleClick(path)}
          >
            ❤️
          </button>
        ) : (
          ""
        )}
      </figure>
    </div>
  );
}

function Gallery({
  paths,
  favouriteImages,
  handleClick,
  clearFavouriteImages,
  hasBtn = true,
}) {
  return (
    <section
      className={
        clearFavouriteImages ? "gallery gallery--favourites" : "gallery"
      }
    >
      {clearFavouriteImages ? (
        <button className="btn mb-1" onClick={clearFavouriteImages}>
          Clear Favourites
        </button>
      ) : (
        ""
      )}
      {paths.map((path) => (
        <ImgCard
          key={path}
          path={path}
          handleClick={handleClick}
          hasBtn={hasBtn}
          isFavourite={favouriteImages.has(path)}
        />
      ))}
    </section>
  );
}

function Form({ breeds, handleSubmit }) {
  const [selectedBreed, setSelectedBreed] = useState(breeds[0]);

  return (
    <form
      className="card mb-l"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(selectedBreed);
      }}
    >
      <h1 className="h3">Choose breed</h1>
      <div className="field">
        <label>Breed</label>
        <select
          className="select"
          onChange={(e) => setSelectedBreed(e.target.value)}
          value={selectedBreed}
        >
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  const [breedList, setBreedList] = useState(null);
  const [breedImages, setBreedImages] = useState([]);
  const [favouriteImages, setFavouriteImages] = useState(
    new Set(
      localStorage.getItem("favouriteImages")
        ? JSON.parse(localStorage.getItem("favouriteImages"))
        : []
    )
  );

  const handleSubmit = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => {
        return res.json();
      })
      .then((path) => {
        setBreedImages(path.message);
      });
  };

  const handleClick = (item) => {
    if (favouriteImages.has(item)) {
      setFavouriteImages(
        new Set([...favouriteImages].filter((path) => path !== item))
      );
    } else {
      setFavouriteImages(new Set([...favouriteImages, item]));
    }
  };

  const clearFavouriteImages = () => {
    localStorage.removeItem("favouriteImages");
    setFavouriteImages(new Set());
  };

  useEffect(() => {
    localStorage.setItem(
      "favouriteImages",
      JSON.stringify([...favouriteImages])
    );
  }, [favouriteImages]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBreedList(Object.keys(data.message));
      });
  }, []);

  return (
    <React.Fragment>
      <header className="header mb-l">
        {breedList ? (
          <Form breeds={breedList} handleSubmit={handleSubmit} />
        ) : (
          <Loader />
        )}
      </header>
      <main className="main">
        <Gallery
          paths={breedImages}
          handleClick={handleClick}
          favouriteImages={favouriteImages}
        />
        <Gallery
          paths={Array.from(favouriteImages)}
          hasBtn={false}
          favouriteImages={favouriteImages}
          handleClick={handleClick}
          clearFavouriteImages={clearFavouriteImages}
        />
      </main>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
