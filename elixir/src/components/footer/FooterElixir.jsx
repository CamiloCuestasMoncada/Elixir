import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function FooterElixir() {
  function Copyright() {
    return (
      <Typography variant="body2" id="info.main">
        {"Developed and designed by Camilo Cuestas Moncada. © "}
        <Link color="inherit" href="https://www.camilocm.com/">
          www.camilocm.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      color: "white",
    },

    footer: {
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      backgroundColor: "#a20220",
      bottom: "0",

      width: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default FooterElixir;

