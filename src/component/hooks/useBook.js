import { useEffect } from "react";
import { useState } from "react";

const useBook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(
      "https://student-bazar.herokuapp.com/api/v1/public/product/home_page_product?page=1&limit=16"
    )
      .then((res) => res.json())
      .then((data) => setBook(data.products));
  }, []);
  return [book, setBook];
};

export default useBook;
