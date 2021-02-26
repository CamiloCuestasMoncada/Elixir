import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import rutuni from "../../../img/rutini.jpg";
import santelmo from "../../../img/santelmo.jpg";

function Product({ product }) {
  const images = [rutuni, santelmo];
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.formatted_width_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML= {{ __html: product.description}} variant="body2" color="textSecondary"/>
         
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton arial-label="Add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
