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


class Buy extends React.Component {
    render() {
        return (
            <BuyContainer>
                <MenuSuperior />
                <SectionsGrid>
                    <Filters />
                    <Showcase />
                    <ShoppingCart />
                </SectionsGrid>
            </BuyContainer>
        )
    }
}

export default Buy