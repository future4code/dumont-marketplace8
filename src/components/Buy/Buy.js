import React from 'react';
import styled from 'styled-components'

import MenuSuperior from '../MenuSuperior';
import Filters from './Filters/Filters';
import Showcase from './Showcase/Showcase';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const SectionsGrid = styled.div`
    display: flex;
    background-color: #F2EFE4;
    
`

const BuyContainer = styled.div`
    // background-color: #F2C063;
`

const products = [
    {
        name: "produto 1 TESTE",
        description:"produtãovish",
        price:"10",
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=1', 'https://picsum.photos/200/?a=2'],
        installments:"3",
        id:"1"
    },
    {
        name: "produto 2",
        description:"produtãovish2",
        price:"102",
        paymentMethod:"cartao",
        category:"movel",
        photos:['https://picsum.photos/200/?a=3', 'https://picsum.photos/200/?a=4'],
        installments:"3",
        id:"2"
    },
    {   
        name: "produto 3",
        description:"produtãovish3",
        price:"103",
        paymentMethod:"cheque",
        category:"acessorio",
        photos:['https://picsum.photos/200/?a=5', 'https://picsum.photos/200/?a=6'],
        installments:"6",
        id:"3"
    },
    {
        name: "produto 4",
        description:"produtãovish4",
        price:"104",
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=7', 'https://picsum.photos/200/?a=8'],
        installments:"3",
        id:"4"
    },
    {
        name: "produto 5",
        description:"produtãovish",
        price:"10",
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=9', 'https://picsum.photos/200/?a=10'],
        installments:"3",
        id:"5"
    },
    {
        name: "produto 6",
        description:"produtãovish6",
        price:"10",
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=11', 'https://picsum.photos/200/?a=12'],
        installments:"3",
        id:"6"
    },
    {
        name: "produto 7",
        description:"produtãovish",
        price:"10",
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=13', 'https://picsum.photos/200/?a=14'],
        installments:"3",
        id:"7"
    }
]

class Buy extends React.Component {
    state = {
        productsInCart: [{
            name: "produto 1 TESTE",
            description:"produtãovish",
            price:"10",
            paymentMethod:"dinheiro",
            category:"roupa",
            photos:['https://picsum.photos/200/?a=1', 'https://picsum.photos/200/?a=2'],
            installments:"3",
            id:"1"
        },
        {
            name: "produto 2",
            description:"produtãovish2",
            price:"102",
            paymentMethod:"cartao",
            category:"movel",
            photos:['https://picsum.photos/200/?a=3', 'https://picsum.photos/200/?a=4'],
            installments:"3",
            id:"2"
        },
        {   
            name: "produto 3",
            description:"produtãovish3",
            price:"103",
            paymentMethod:"cheque",
            category:"acessorio",
            photos:['https://picsum.photos/200/?a=5', 'https://picsum.photos/200/?a=6'],
            installments:"6",
            id:"3"
        },]
    }
    onAddProductToCart = (productId) => {
        const productInCart = this.state.productsInCart.find(product => productId === product.id)

        if(productInCart) {
            const newProductsInCart = this.state.productsInCart.map(product => {
                if(productId === product.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }

                return product
            })

            this.setState({ productsInCart: newProductsInCart})
        } else {
            const productToAdd = products.find(product => productId === product.id)

            const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

            this.setState({ productsInCart: newProductsInCart })
        }
    }

    render() {
        return (
            <BuyContainer>
                <MenuSuperior />
                <SectionsGrid>
                    <Filters />
                    <Showcase 
                        products={products} 
                        onAddProductToCart={this.onAddProductToCart}
                    />
                    <ShoppingCart />
                </SectionsGrid>
            </BuyContainer>
        )
    }
}

export default Buy