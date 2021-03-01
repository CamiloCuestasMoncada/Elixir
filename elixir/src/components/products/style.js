import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: '100px',
    marginBottom: '70px',
  },
  root: {
    flexGrow: 1,
    marginTop: '100px',
    
  },
}));

