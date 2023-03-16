import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState();
  const { categoryName } = useParams();
  console.log(categoryName);
  const getData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
      console.log(response);
      if (response.status !== 200) {
        throw new Error('Not ok');
      }

      const data = await response.json();
      setProductList(data);
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
      <ul className="button__categories__all">
        {productList.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default Products;
