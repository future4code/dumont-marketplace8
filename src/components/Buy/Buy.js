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


class Buy extends React.Component {
    state = {
        minFilter: "",
        maxFilter: "",
        nameFilter: "",
        categoryFilter: "",
        productsList: this.props.list,
        listaDoCarrinho: []
    }

    
 
    componentDidUpdate(){
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
             const produtoParaAdd = this.props.list.find((produto)=>produtoId===produto.id)
             const novoProdutoNoCar = [...this.state.listaDoCarrinho,{...produtoParaAdd,quantity:1}]
             this.setState({listaDoCarrinho: novoProdutoNoCar})
         }

         
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
                        list={this.props.list}
                    />
                    <Showcase 
                        
                        minFilter={this.state.minFilter}
                        maxFilter={this.state.maxFilter}
                        nameFilter={this.state.nameFilter}
                        categoryFilter={this.state.categoryFilter}
                        addProdutoCarrinho={this.addProdutoCarrinho}
                        list={this.props.list}
                        
                    />
              
                    <ShoppingCart 
                        listaDoCarrinho={this.state.listaDoCarrinho}
                        removeProdutoCarrinho={this.removeProdutoCarrinho}
                        list={this.props.list}
                    />
                          
                </SectionsGrid>
            </BuyContainer>
        )
    }
}

export default Buy