import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  buttonUsersOptions: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#802c6e',
  },
  button: {
    backgroundColor: '#802c6e',
    fontSize: '18px',
    padding: '15px 30px',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    border: 'none',
  },
}));

const UsersNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.buttonUsersOptions}>
        <button className={classes.button}>All Users</button>
        <button className={classes.button}>Add Users</button>
      </div>
    </div>
  );
};
export default UsersNav;
