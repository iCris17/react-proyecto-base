import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    // width: 128,
    // height: 128,
  },
  img: {
    margin: 'auto',
    // display: 'block',
    maxWidth: '40%',
    height: '40%',
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
    <div>
      {productList.map((product) => {
        return (
          <Grid container spacing={9} key={product}>
            <Grid item>
              <Paper className={classes.paper} key={product}>
                <ButtonBase className={classes.images} key={product}>
                  <img src={product.image} className={classes.img}></img>
                </ButtonBase>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={6}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID:{product.id}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {product.description}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Remove
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">${product.price}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};
export default Products;
