import React, {useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
import Products from './components/products/Products';
import Navbar from './components/navbar/Navbar';


const App = () => {
    const [products, setProducts] = useState([]);

const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);

}

useEffect(() => {
    fetchProducts();
}, []);

console.log(products);

    return (
        <div>
            <p>Elixir bienvenidos</p>
            <Navbar/>
            <Products products = {products}/>
        </div>
    )
}

export default App;
