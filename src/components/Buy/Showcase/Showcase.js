import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding: 10px;
`

class Showcase extends React.Component {

    componentDidMount(){
        this.getFilteredAndOrderedList()
    }
   
    getFilteredAndOrderedList = () => {
        const filteredList =this.props.list
            .filter((product) => {
                if (this.props.minFilter) {
                    return(product.price >= this.props.minFilter)
                } else {
                    return true
                }
            })
    
            .filter((product) => {
                if (this.props.maxFilter) {
                    return(product.price <= this.props.maxFilter)
                } else {
                    return true
                }
            })
    
            .filter((product) => {
                if (this.props.nameFilter) {
                    return(this.props.nameFilter && product.name.includes(this.props.nameFilter))
                } else {
                    return true
                }
            })

            .filter((product) => {
                if (this.props.categoryFilter) {
                    return(this.props.categoryFilter && product.category.includes(this.props.categoryFilter))
                } else {
                    return true
                }
            })
    
            return (
                filteredList
            )
    }

    render() {
        const filterProducts = this. getFilteredAndOrderedList()
        return (
            <ProductsGrid>
          {filterProducts.map((product) => {
                return <ProductCard 
                        product={product} 
                        addProdutoCarrinho={this.props.addProdutoCarrinho} 
                        // getProducts={this.props.getProducts}   
                    />

                })}

            </ProductsGrid>
        )
    }
}

export default Showcase