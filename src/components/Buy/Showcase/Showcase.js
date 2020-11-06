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
    render() {
        return (
            <ProductsGrid>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductsGrid>
        )
    }
}

export default Showcase