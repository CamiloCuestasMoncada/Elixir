import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from './styles';
import CartItem from './cartItem/CartItem';
import {  Link } from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartCant, handleRemoveFromCart, handleEmptyCart}) => {
 
  
  
  const classes = useStyles();
 

  const EmptyCart = () => (
    <Typography variant="subtitle1">Tu Carrito está vacio, 
    <Link to="/">Empieza a llenarlo! ;)</Link>!
    </Typography>
  )

  const FilledCard = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item = {item} onUpdateCartCant={handleUpdateCartCant} onRemoveFromCart={handleRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>

      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Vaciar Carrito
          </Button>
          <Button
          component={Link} to="/checkout"
            className={classes.checkout}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            checkout
          </Button>
        </div>
      </div>
    </>
  );

 
  if (!cart.line_items) return 'Loading';
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Tu Carrito de Compras.
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCard />}
    </Container>
  );
};

export default Cart;
