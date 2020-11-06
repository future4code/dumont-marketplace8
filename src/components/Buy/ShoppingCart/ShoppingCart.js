import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import styled from 'styled-components'

const CarrinhoContainer = styled.div`
    background-color: #fffcef;
    display: flex;
    flex-direction: column;
    
`

class ShoppingCart extends React.Component {
    render() {
        return (
            <CarrinhoContainer>
                <h3>Eco Bag!</h3>
                <ShoppingCartItem />
            </CarrinhoContainer>
        )
    }
}

export default ShoppingCart