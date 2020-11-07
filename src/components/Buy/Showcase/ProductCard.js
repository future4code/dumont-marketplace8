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
        margin: 6px;
    }
`

class ProductCard extends React.Component {
    render() {
        const product = this.props.product
        
        return (
            <CardContainer>
                <ProductPicture src={product.photos}/>
                <CardInfo>
                    <p><strong>Nome:</strong> {product.name}</p>
                    <p><strong>Descrição:</strong> {product.description}</p>
                    <p><strong>Categoria:</strong> {product.category}</p>
                    <p><strong>Preço:</strong> R${product.price},00</p>
                    <p><strong>Pagamento:</strong> {product.paymentMethod}</p>
                    <p><strong>Parcelamento:</strong>{product.installments}</p>
                    <hr />
                    <Button
                        onClick={() => this.props.onAddProductToCart(product.id)}
                        variant='contained'
                        color= 'primary'
                        size='small'
                        startIcon={<AddShoppingCartIcon />}
                    >
                        Adicionar à ecobag!
                    </Button>
                </CardInfo>

            </CardContainer>
        )
    }
}

export default ProductCard