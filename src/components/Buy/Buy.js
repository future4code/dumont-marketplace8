import React from 'react';
import styled from 'styled-components'

import MenuSuperior from './MenuSuperior';
import Filters from './Filters/Filters';
import Showcase from './Showcase/Showcase';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const SectionsGrid = styled.div`
    display: grid;
    background-color: #fffcef;
    grid-template-columns: 1fr 3fr 1fr;
    
`

const BuyContainer = styled.div`
    // background-color: #F2C063;
`

const products = [
    {
        name: "produto 1 TESTE",
        description:"produtãovish",
        price:10,
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=1', 'https://picsum.photos/200/?a=2'],
        installments:3,
        id:1
    },
    {
        name: "produto 2",
        description:"produtãovish2",
        price:102,
        paymentMethod:"cartao",
        category:"movel",
        photos:['https://picsum.photos/200/?a=3', 'https://picsum.photos/200/?a=4'],
        installments:3,
        id:2
    },
    {   
        name: "produto 3",
        description:"produtãovish3",
        price:103,
        paymentMethod:"cheque",
        category:"acessorio",
        photos:['https://picsum.photos/200/?a=5', 'https://picsum.photos/200/?a=6'],
        installments:6,
        id:3
    },
    {
        name: "produto 4",
        description:"produtãovish4",
        price:104,
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=7', 'https://picsum.photos/200/?a=8'],
        installments:3,
        id:4
    },
    {
        name: "produto 5",
        description:"produtãovish",
        price:10,
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=9', 'https://picsum.photos/200/?a=10'],
        installments:3,
        id:5
    },
    {
        name: "produto 6",
        description:"produtãovish6",
        price:10,
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=11', 'https://picsum.photos/200/?a=12'],
        installments:3,
        id:6
    },
    {
        name: "produto 7",
        description:"produtãovish",
        price:10,
        paymentMethod:"dinheiro",
        category:"roupa",
        photos:['https://picsum.photos/200/?a=13', 'https://picsum.photos/200/?a=14'],
        installments:3,
        id:7
    }
]

class Buy extends React.Component {
    state = {
        minFilter: "",
        maxFilter: "",
        nameFilter: "",
        categoryFilter: "",
        productsList: products,
        listaDoCarrinho: []
    }

    componentDidMount() {
        this.getFilteredAndOrderedList()
    }
 
    componentDidUpdate=()=>{
        localStorage.setItem("listaDoCarrinho", JSON.stringify(this.state.listaDoCarrinho))
    }
    componentDidMount(){
        if(localStorage.getItem("listaDoCarrinho")){
        this.setState({listaDoCarrinho:JSON.parse(localStorage.getItem("listaDoCarrinho"))})}
    }
    
    addProdutoCarrinho = (produtoId) => {
         const produtoNoCarrinho=this.state.listaDoCarrinho.find((produto)=>produtoId===produto.id)
 
         if(produtoNoCarrinho){
             const novoProdutoNoCar = this.state.listaDoCarrinho.map((produto)=>{
                 if(produtoId===produto.id){
                     return {...produto, quantity:produto.quantity+1}
                 }
                 return produto
             })
             this.setState({listaDoCarrinho:novoProdutoNoCar})
         }else{
             const produtoParaAdd = products.find((produto)=>produtoId===produto.id)
             const novoProdutoNoCar = [...this.state.listaDoCarrinho,{...produtoParaAdd,quantity:1}]
             this.setState({listaDoCarrinho: novoProdutoNoCar})
         }

         console.log(products)
     }

     

     removeProdutoCarrinho = (produtoId)=>{
         const novoProdutoNoCar = this.state.listaDoCarrinho.map((produto)=>{
             if(produto.id ===produtoId){
                 return {...produto,quantity: produto.quantity-1 }
             }
             return produto
         }).filter((produto)=>produto.quantity>0)
         this.setState({listaDoCarrinho:novoProdutoNoCar})
     }
 
        
 
    
  
    // onAddProductToCart = (productId) => {
    //     const productInCart = this.state.productsInCart.find(product => productId === product.id)

    //     if(productInCart) {
    //         const newProductsInCart = this.state.productsInCart.map(product => {
    //             if(productId === product.id) {
    //                 return {
    //                     ...product,
    //                     quantity: product.quantity + 1
    //                 }
    //             }

    //             return product
    //         })

    //         this.setState({ productsInCart: newProductsInCart})
    //     } else {
    //         const productToAdd = products.find(product => productId === product.id)

    //         const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

    //         this.setState({ productsInCart: newProductsInCart })
    //     }
    // }

    getFilteredAndOrderedList = () => {
        const filteredList = products
            .filter((product) => {
                if (this.state.minFilter) {
                    return(product.price >= Number(this.state.minFilter))
                } else {
                    return true
                }
            })
    
            .filter((product) => {
                if (this.state.maxFilter) {
                    return(product.price <= Number(this.state.maxFilter))
                } else {
                    return true
                }
            })
    
            .filter((product) => {
                if (this.state.nameFilter) {
                    return(this.state.nameFilter && product.name.includes(this.state.nameFilter))
                } else {
                    return true
                }
            })

            .filter((product) => {
                if (this.state.categoryFilter) {
                    return(this.state.categoryFilter && product.category.includes(this.state.categoryFilter))
                } else {
                    return true
                }
            })
    
            return (
                filteredList
            )
    }

    onChangeMinFilter = (event) => {
        this.setState({
            minFilter: event.target.value
        })
    }
    
    onChangeMaxFilter = (event) => {
        this.setState({
            maxFilter: event.target.value
        })
    }
    
    onChangeNameFilter = (event) => {
        this.setState({
            nameFilter: event.target.value
        })
    }

    onChangeCategoryFilter = (event) => {
        this.setState({
            categoryFilter: event.target.value
        })
    }

    render() {
        
        return (
            <BuyContainer>
                <MenuSuperior shopButton ={this.props.shopButton} />
                <SectionsGrid>
                    <Filters 
                        minFilter={this.state.minFilter}
                        maxFilter={this.state.maxFilter}
                        nameFilter={this.state.nameFilter}
                        categoryFilter={this.state.categoryFilter}
                        onChangeMinFilter={this.onChangeMinFilter}
                        onChangeMaxFilter={this.onChangeMaxFilter}
                        onChangeNameFilter={this.onChangeNameFilter}
                        onChangeCategoryFilter={this.onChangeCategoryFilter}
                    />
                    <Showcase 
                        products={this.getFilteredAndOrderedList()} 
                        minFilter={this.state.minFilter}
                        maxFilter={this.state.maxFilter}
                        nameFilter={this.state.nameFilter}
                        categoryFilter={this.state.categoryFilter}
                        addProdutoCarrinho={this.addProdutoCarrinho}
                        products={products}
                    />
              
                    <ShoppingCart 
                        listaDoCarrinho={this.state.listaDoCarrinho}
                        removeProdutoCarrinho={this.removeProdutoCarrinho}
                    />
                          
                </SectionsGrid>
            </BuyContainer>
        )
    }
}

export default Buy