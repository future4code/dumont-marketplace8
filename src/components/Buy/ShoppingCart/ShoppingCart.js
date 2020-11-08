import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import styled from 'styled-components'

const CarrinhoContainer = styled.div`
    background-color: #fffcef;
    display: flex;
    flex-direction: column;
    
`

class ShoppingCart extends React.Component {
    getValorTotal=()=>{
        let valorTotal=0
        for(let produtos of this.props.adicionaCarrinho){
            valorTotal+=produtos.preço*produtos.quantidade
        }
        return valorTotal
    }

    render() {
        return (
            <CarrinhoContainer>
                <h3>Eco Bag!</h3>
                <ShoppingCartItem />
            
             <div>
                {this.props.adicionaCarrinho.map((produto)=>{
                return <ShoppingCartItem 
                itemCar={produto}
                removeProdutoCarrinho={this.props. removeProdutoCarrinho}/>  })}
            </div>
            <hr/>
            <p>Valor Total: R${this.getValorTotal()}</p>

            </CarrinhoContainer>         
        )
    }
}

export default ShoppingCart