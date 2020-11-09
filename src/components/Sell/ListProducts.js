import React from 'react';
import axios from "axios";
import styled from "styled-components";

const ItensList = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
   
`
const ButtonDelete = styled.button`
    background-color:#f24141; 
    border:none;
    margin-left:2em;
`
const ListContainer = styled.div`
   background-color:#fffcef;
   
`
const ImgList = styled.img`
  width:6em;
  height:8em;
`
const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products";

class ListProducts extends React.Component {
      
  componentDidMount(){ 
    this.setState(this.props.list)
}

    deleteProducts = (id) => {
        axios
          .delete(`${baseUrl}/${id}`)
          .then((response) => {
            alert("Produto deletado com sucesso!");
            this.getProducts();
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

    render() {
        const renderList = this.props.list.map((item) =>{
            return(
              <ListContainer>
                <ItensList>
                  <p key={item.id}>
                    Produto:{item.name}
                  </p>

                  <p key={item.id}>
                    preço: R$ {item.price}
                  </p>

                  <ImgList src= {item.photos} key={item.id}/>
                  
                  <ButtonDelete onClick={() => this.deleteProducts(item.id)}>Apagar Produto da lista</ButtonDelete>
                </ItensList>                
              </ListContainer>
              
            )
        })


        return (
        <div>{renderList}</div>
        )
    }
}

export default ListProducts