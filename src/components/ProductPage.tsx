import React, { Component, ContextType, CSSProperties } from 'react'; 
import ProductItem from './ProductItem';
import ProductData from '../data/ProductData'


interface Products {
    image: string, 
    title: string, 
    price: string
}

class ProductPage extends Component {

    render() {
        return(
            <div style={rootStyle}>
                {ProductData.map((product) => 
                <ProductItem 
                title={product.title}
                image={product.image}
                price={product.price}
                />)}

            </div>
        )
    }
}

const rootStyle: CSSProperties = {
    width: '75%', 
    height: '100%', 
    display: 'flex', 
    flexWrap: 'wrap' 
}

export default ProductPage;
