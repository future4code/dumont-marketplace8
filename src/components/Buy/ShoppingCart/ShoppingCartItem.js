import React from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styled from 'styled-components'

const ItensCarrinho = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;

`
const EstiloBotao = styled.button`
    background-color:#f24141; 
`
class ShoppingCartItem extends React.Component {
    render() {
        return (
            <ItensCarrinho>
                {/* <p>{this.props.itemCar.quantity}</p>
                <p>{this.props.itemCar.name}</p> */}
                <EstiloBotao onClick={()=>this.props.removeProdutoCarrinho(this.props.itemCar.id)}>X</EstiloBotao>

            </ItensCarrinho>

        )
    }
}

export default ShoppingCartItem