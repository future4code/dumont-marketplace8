import React from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styled from 'styled-components'

const CardContainer = styled.div`
    border: 1px dotted #F2C063;
    text-align: center;
    background-color: #F2C063;
`

const ProductPicture = styled.img`
    max-width: 300px;
    max-height: 300px;
    width: auto;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

    p{
        margin: 4px;
    }
`

class ProductCard extends React.Component {
    render() {
        return (
            <CardContainer>
                <ProductPicture src= 'https://picsum.photos/300'/>
                <CardInfo>
                    <p>Nome</p>
                    <p>Descrição</p>
                    <p>Categoria</p>
                    <p>Preço</p>
                    <p>Método de Pagamento</p>
                    <p>Parcelamento</p>
                    <Button
                        variant='contained'
                        color= 'primary'
                        size='small'
                        startIcon={<AddShoppingCartIcon />}
                    >
                        Adicionar ao carrinho!
                    </Button>
                </CardInfo>

            </CardContainer>
        )
    }
}

export default ProductCard