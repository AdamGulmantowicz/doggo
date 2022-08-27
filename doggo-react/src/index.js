import React from "react";
import ReactDOM from "react-dom/client";
import { BreedsProvider } from "./context/Breeds";
import Gallery from "./features/Gallery";
import "./sass/main.scss";

export default function App() {
  return <Gallery></Gallery>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BreedsProvider>
      <App />
    </BreedsProvider>
  </React.StrictMode>
);
