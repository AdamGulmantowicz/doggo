import React, { useState, useEffect, useRef } from "react";
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

function ImgCard({ path, hasBtn = true, handleClick, isFavourite, onLoad }) {
  return (
    <div className="card mb-m">
      <figure className="card__img">
        <img src={path} alt="" onLoad={onLoad} />
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
  const [renderList, setRenderList] = useState(false);

  useEffect(() => {
    setRenderList(false);
  }, [paths]);

  return (
    <React.Fragment>
      <section
        className={
          (clearFavouriteImages ? "gallery gallery--favourites" : "gallery") +
          (renderList ? " visible" : " hidden")
        }
      >
        {clearFavouriteImages ? (
          <button className="btn mb-1" onClick={clearFavouriteImages}>
            Clear Favourites
          </button>
        ) : (
          ""
        )}
        {paths.map((path, index) => (
          <ImgCard
            key={path}
            path={path}
            handleClick={handleClick}
            hasBtn={hasBtn}
            isFavourite={favouriteImages.has(path)}
            onLoad={() => {
              if (index + 1 === paths.length) setRenderList(true);
            }}
          />
        ))}
      </section>
      {paths.length > 0 ? renderList ? "" : <Loader /> : ""}
    </React.Fragment>
  );
}

function Form({ breeds, handleSubmit }) {
  // const [selectedBreed, setSelectedBreed] = useState(breeds[0]);
  const formRef = useRef();
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setInputValue(searchTerm);
  };
  return (
    <form
      ref={formRef}
      className="card mb-l"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        handleSubmit(formData);
      }}
    >
      <h1 className="h3">Choose breed</h1>
      <div className="field">
        <label>Breed</label>
        <select
          className="select"
          name="breed"
          // onChange={(e) => setSelectedBreed(e.target.value)}
          // value={selectedBreed}
        >
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <input type="number" min="1" max="5" defaultValue="1" name="limit" />
        <div className="search__container">
          <div className="search__inner">
            <label>search</label>
            <input type="text" value={inputValue} onChange={onChange} />
          </div>
          <ul className="search__list">
            {inputValue > 2
              ? breeds
                  .filter(
                    (item) => item.startsWith(inputValue) && item !== inputValue
                  )
                  .slice(0, 10)
                  .map((breed) => (
                    <li
                      key={breed}
                      value={breed}
                      onClick={() => onSearch(breed)}
                    >
                      {breed}
                    </li>
                  ))
              : ""}
          </ul>
        </div>
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
  const [currentBreed, setCurrentBreed] = useState(null);
  const [favouriteImages, setFavouriteImages] = useState(
    new Set(
      localStorage.getItem("favouriteImages")
        ? JSON.parse(localStorage.getItem("favouriteImages"))
        : []
    )
  );

  const handleSubmit = (formData) => {
    const breed = formData.get("breed");
    const limit = formData.get("limit");
    setCurrentBreed(breed);
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => {
        return res.json();
      })
      .then((path) => {
        setBreedImages(path.message.slice(0, limit));
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
        {currentBreed ? (
          <h2 className="card h2">currently selected breed: {currentBreed}</h2>
        ) : (
          <h2 className="card h2">Find your favourite dog!</h2>
        )}
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
