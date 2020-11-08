import React from 'react';
import styled from 'styled-components'

import MenuSuperior from './MenuSuperior';
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


class Buy extends React.Component {
    state = {
      

        listaDoCarrinho:[    ]
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
                     return {...produto, quantidade:produto.quantidade + 1}
                 }
                 return produto
             })
             this.setState({listaDoCarrinho:novoProdutoNoCar})
         }else{
             const produtoParaAdd = ArrayDeProdutos.find((produto)=>produtoId===produto.id)
             const novoProdutoNoCar = [...this.state.listaDoCarrinho,{...produtoParaAdd,quantidade:1}]
             this.setState({listaDoCarrinho: novoProdutoNoCar})
         }
     }
     removeProdutoCarrinho = (produtoId)=>{
         const novoProdutoNoCar = this.state.listaDoCarrinho.map((produto)=>{
             if(produto.id ===produtoId){
                 return {...produto,quantidade: produto.quantidade-1 }
             }
             return produto
         }).filter((produto)=>produto.quantidade>0)
         this.setState({listaDoCarrinho:novoProdutoNoCar})
     }
 
     
 
    render() {
        return (
            <BuyContainer>
                <MenuSuperior shopButton ={this.props.shopButton} />
                <SectionsGrid>
                    <Filters />
                    <Showcase
                        addProdutoCarrinho={this.addProdutoCarrinho}
                     />
                    <ShoppingCart 
                        adicionaCarrinho={this.state.listaDoCarrinho}
                        removeProdutoCarrinho={this.removeProdutoCarrinho}
                    />
                </SectionsGrid>
            </BuyContainer>
        )
    }
}

export default Buy