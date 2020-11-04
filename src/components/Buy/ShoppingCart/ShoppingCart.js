import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

class ShoppingCart extends React.Component {
    render() {
        return (
            <div>
                ESTE É O COMPONENTE DE SHOPPING CART
                <ShoppingCartItem />
            </div>
        )
    }
}

export default ShoppingCart