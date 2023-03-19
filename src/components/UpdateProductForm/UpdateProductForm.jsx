import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { pink } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    background: 'black',
    padding: '100px 0 100px 0',
    textAlign: 'center',
    color: 'white',
  },
  input: {
    background: 'white',
    width: '100%',
    color: 'black',
    '&:focus, &:not(:focus), &:hover': {
      background: 'white',
    },
    margin: '15px 0 15px 0',
  },
  submit: {
    padding: '10px 60px',
    '&:active': {
      transform: 'scale(0.9)',
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: pink,
  },
});

const UpdateProductForm = (props) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const clearForm = () => {
    setTitle('');
    setPrice('');
    setDescription('');
  };

  const handleSubmit = (event) => {
    console.log(props.productID);
    event.preventDefault();
    const newProductList = props.productList.map((product) => {
      if (props.productID == product.id) {
        return { ...product, title, description, price };
      }
      return product;
    });
    props.setProductList(newProductList);
    props.handleClose();
    clearForm();
  };

  return (
    <Dialog open={props.isOpen} onClose={props.handleClose}>
      <DialogTitle>Add all the information to update your product.</DialogTitle>
      <Grid container className={classes.root} id="contact-us">
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                required
                id="filled-basic"
                label=" New Title"
                variant="filled"
                className={classes.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                type="number"
                required
                id="filled-basic"
                label="New Price"
                variant="filled"
                className={classes.input}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <TextField
                type="text"
                required
                multiline
                id="filled-basic"
                label="New Description"
                variant="filled"
                className={classes.input}
                minRows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <DialogActions>
                <Button
                  onClick={props.handleClose}
                  className={classes.submit}
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  className={classes.submit}
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Update
                </Button>
              </DialogActions>
            </form>
          </ThemeProvider>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>
    </Dialog>
  );
};
UpdateProductForm.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  setProductList: PropTypes.func,
  productList: PropTypes.array,
  productID: PropTypes.number,
};
export default UpdateProductForm;
