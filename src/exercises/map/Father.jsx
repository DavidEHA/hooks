import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function Father() {
    
    const products = [
        {title:"Product 1",
            price:"$10",
            description:"First product"
        },
        {title:"Product 2",
            price:"$20",
            description:"Second product"}]
    return (
        <div>
            <h1>My Demo Shop</h1>
                       {products.map(product => (
              <Product key={product.title}title={product.title} price={product.price} description={product.description}/> 
            ))}

            
        </div>
    );
}