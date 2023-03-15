import { useState, useEffect } from "react";

const CategoryFilters = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const getData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );

      if (response.status !== 200) {
        throw new Error("Not ok");
      }

      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    //SE EJECUTA 1 VEZ CUANDO SE MONTE EL COMPONENTE
    getData();
  }, []);
  if (error) {
    return <p> error</p>;
  }
  return (
    <div>
      <div>
        {categories.map((category) => {
          return <button>{category}</button>;
        })}
      </div>
    </div>
  );
};
export default CategoryFilters;
