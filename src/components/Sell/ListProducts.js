import React from 'react';
import axios from "axios";
import styled from "styled-components";

const ItensList = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25em;
`
const ButtonDelete = styled.button`
    background-color:#f24141; 
    border:none;
    margin-left:2em;
`
const ListContainer = styled.div`
   background-color:#fffcef;
`

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products";

class ListProducts extends React.Component {
    state ={
        list: []
    }

    componentDidMount =() =>{
        this.getProducts()
    }
   
    getProducts = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products")
        .then((response) => {this.setState({list: response.data.products})
       })
       .catch((error) =>{console.log(error.message)
       })
    }

    deleteProducts = (id) => {
        axios
          .delete(`${baseUrl}/${id}`)
          .then((response) => {
            alert("Usuário deletado com sucesso!");
            this.getProducts();
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

    render() {
        const renderList = this.state.list.map((item) =>{
            return(
              <ListContainer>
                <ItensList>
                  <p key={item.id}>
                    {item.name}
                  </p>
                  <ButtonDelete onClick={() => this.deleteProducts(item.id)}>X</ButtonDelete>
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