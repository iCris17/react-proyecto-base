import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { truncate } from '../../utils/string';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    padding: '25px',
  },

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  images: {
    width: '100%',
  },
  img: {
    maxWidth: '100%',
    height: '200px',
  },
  title: {
    paddingTop: '20px',
    minHeight: '85px',
    fontWeight: 'bold',
  },
  description: {
    minHeight: '150px',
  },
  price: {
    paddingTop: '20px',
    color: 'Green',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#802c6e',
    fontSize: '15px',
    padding: '10px',
    borderWidth: '0.5px',
    color: 'white',
    textTransform: 'capitalize',
  },
}));

const Products = () => {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState();
  const { categoryName } = useParams();

  const getData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);

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
    //SE EJECUTA cada vez que categoryName cambia

    getData();
  }, [categoryName]);

  if (error) {
    return <p> error</p>;
  }

  return (
    <Grid container spacing={2} className={classes.container}>
      {productList.map((product) => {
        return (
          <Grid item xs={12} md={3} key={product}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Paper className={classes.paper} key={product}>
                  <ButtonBase className={classes.images} key={product}>
                    <img src={product.image} className={classes.img}></img>
                  </ButtonBase>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={12}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" className={classes.title}>
                          {truncate(product.title, 50)}
                        </Typography>
                        <Typography variant="subtitle1" className={classes.price}>
                          ${product.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          ID:{product.id}
                        </Typography>
                        <Typography variant="body2" gutterBottom className={classes.description}>
                          {truncate(product.description, 150)}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <button
                          className={classes.button}
                          onClick={() => {
                            const remove = productList.filter(
                              (producto) => producto.id !== product.id,
                            );
                            setProductList(remove);
                          }}
                        >
                          Remove
                        </button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Products;
