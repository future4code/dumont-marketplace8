import React from 'react';
import axios from "axios";
import styled from "styled-components";

const BtnDelete = styled.span`
  color: red;
  margin-left: 10px;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products/:id";

class ListProducts extends React.Component {
    state ={
        list: []
    }

    componentDidMount =() =>{
        this.getProducts()
    }
   
    getProducts = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products")
        .then((response) => {this.setState({list: response.data})
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
              <div>
                <p key={item.id}>
                    {item.name}
                    <BtnDelete onClick={() => this.deleteProducts(item.id)}>X</BtnDelete>
                </p>
              </div>
            )
        })


        return (
        <div>{renderList}</div>
        )
    }
}

export default ListProducts