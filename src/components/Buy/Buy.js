import React from 'react';
import MenuSuperior from '../MenuSuperior';
import Filters from './Filters/Filters';
import Showcase from './Showcase/Showcase';
import ShoppingCart from './ShoppingCart/ShoppingCart';

class Buy extends React.Component {
    render() {
        return (
            <div>
                <MenuSuperior />
                ESTE É O COMPONENTE DA BUY PAGE
                <Filters />
                <Showcase />
                <ShoppingCart />
            </div>
        )
    }
}

export default Buy