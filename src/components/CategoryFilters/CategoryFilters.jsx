import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  buttonCategories: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#802c6e',
  },
  button: {
    backgroundColor: '#802c6e',
    fontSize: '15px',
    padding: '15px 30px',
    borderWidth: '0.5px',
    color: 'white',
    fontFamily: 'Proxima Nova',
    textTransform: 'capitalize',
  },
}));

const CategoryFilters = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();
  const [error, setError] = useState();
  const getData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/categories`);

      if (response.status !== 200) {
        throw new Error('Not ok');
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
      <div className={classes.buttonCategories}>
        {categories.map((category) => {
          return (
            <button
              className={classes.button}
              key={category}
              onClick={() => {
                navigate(`/category/${category}`);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryFilters;
