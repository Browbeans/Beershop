import React, { Component, createContext } from 'react'; 


interface State {
    cart: string[]
}

interface ContextValue {
    cart: string[]
    addToCart : (product: string) => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [], 
    addToCart: () => {} 
}) 

class CartProvider extends Component {
    state: State = {
        cart: []
    }

    addProductToCart(product: string) {
        const updatedCart = [...this.state.cart, product]
        this.setState({cart: updatedCart})
    }

    render() {
        return(
            <CartContext.Provider value={{
                cart: this.state.cart, 
                addToCart: this.addProductToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}


export default CartProvider;