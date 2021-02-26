import React from 'react';

import Product from './product/Product.jsx';
import { Grid } from '@material-ui/core';


function Products() {
  const products = [
    {
      id: 1,
      name: "vino Rutini",
      descrription:
        "Estuche Colección Rutini Cabernet Malbec x 1 Botella de 750ml",
        precio: "1500"
    },
    {
      id: 2,
      name: "vino San Telmo",
      descrription:
        "Estuche Colección Rutini Cabernet Malbec x 1 Botella de 750ml",
        precio: "1500"
    },
  ];

  return (
    <main>
      <Grid container justify="center spacing={4}">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>

              <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;












