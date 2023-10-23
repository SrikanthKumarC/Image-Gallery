import { useDebounce } from "usehooks-ts";
import axios from "../api/images";
import { useEffect, useState, useMemo } from "react";
function useSearch(search = "cards") {
  const debouncedValue = useDebounce(search, 1500);
  const [images, setImages] = useState([]);
  const imageResultMap = useMemo(() => new Map(), []);
  useEffect(() => {
    if (debouncedValue) {
      console.log("cache", imageResultMap.has(debouncedValue), debouncedValue);
      if (!imageResultMap.has(debouncedValue)) {
        axios
          .get("/search/photos", {
            params: {
              query: debouncedValue,
            },
          })
          .then((res) => {
            console.log(res.data.results);
            imageResultMap.set(debouncedValue, res.data.results);
            setImages(res.data.results);
          });
      } else {
        setImages(imageResultMap.get(debouncedValue));
      }
    }
  }, [debouncedValue]);

  return images;
}

export default useSearch;
