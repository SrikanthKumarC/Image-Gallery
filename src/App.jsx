import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import CardComponent from "./components/CardComponent";
import useSearch from "./hooks/useSearch";

const breakpointColumnsObj = {
  default: 4,
  1100: 2,
  700: 1,
  500: 1,
};
function App() {
  const [search, setSearch] = useState("cars");
  const images = useSearch(search);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="px-8 pt-4 flex justify-center dark:border-t dark:border-gray-600 dark:bg-slate-800">
        <div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((image) => {
              return <CardComponent key={image.id} image={image} />;
            })}
          </Masonry>
          <div className="h-10 w-full"></div>
        </div>
      </main>
    </>
  );
}

export default App;
