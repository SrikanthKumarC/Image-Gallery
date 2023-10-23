import Search from "./Search";
import { useEffect, useState } from "react";

function Header({ search, setSearch }) {
  const [resizeClass, setResizeClass] = useState("");

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setResizeClass("");
      } else {
        setResizeClass("lg:py-8 text-2xl lg:text-6xl");
      }
    }
  }, []);

  return (
    <header
      className={` transition-all bg-white w-full  flex justify-between lg:px-8  py-2 text-lg lg:text-3xl p-3 gap-2 border`}
    >
      <h1 className=" items-center self-center  font-hsc">Image Gallery</h1>
      <Search search={search} setSearch={setSearch} />
    </header>
  );
}

export default Header;
