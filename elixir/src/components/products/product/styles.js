import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
            maxWidth: '100%',
            marginTop: '170px',
            
    },
    media: {
        height: "40px",
        paddingTop: '56.25%', //16:9
        backgroundSize: '99px'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

   
  

    


    }
))