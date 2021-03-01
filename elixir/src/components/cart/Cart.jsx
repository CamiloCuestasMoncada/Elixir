import React from "react";
import { Container, Typography, Button, Grid, Box } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./cartItem/CartItem";
import { Link } from "react-router-dom";
import regalo from "../../img/regalo.svg";

const Cart = ({
  cart,
  handleUpdateCartCant,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <div>
      <Typography variant="subtitle1">
        Tu Carrito está vacio,
        <Link to="/">¡Empieza a llenarlo! </Link>!
      </Typography>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <div>
          <img
            src={regalo}
            alt="Iconos de compra de vino"
            style={{ width: "50vh", marginBottom: "40px", marginTop: "20px" }}
          />
        </div>
      </Box>
    </div>
  );

  const FilledCard = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartCant={handleUpdateCartCant}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>

      <div className={classes.cardDetails}>
        <Typography variant="h5">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="outlined"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Vaciar Carrito
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkout}
            size="large"
            type="button"
            variant="outlined"
            color="primary"
          >
            checkout
          </Button>
        </div>
      </div>
      <br />
    </>
  );

  if (!cart.line_items) return "Loading";
  return (
    <Container className={classes.content}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Carrito de Compras:
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCard />}
    </Container>
  );
};

export default Cart;
