import React from 'react';
import axios from "axios";
import ListProducts from './ListProducts';



class Sell extends React.Component {
 state ={
    listProducts: true,
    products:[
    {
    name: "",
    description:"",
    price:"",
    paymentMethod:"",
    category:"",
    photos:[],
    installments:""
    
    }
  ]
 }
 createProducts = () =>{
     const body ={
         name: this.state.name,
         description: this.state.description,
         price: Number(this.state.price),
         paymentMethod: this.state.paymentMethod,
         category: this.state.category,
         photos: [this.state.photos],
         installments: Number(this.state.installments)
         
     }
     axios.post("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products",body)
     .then((response) =>{
         alert("Produto Criado com sucesso!!")
         this.setState({
         name:"",
         description:"",
         price: "",
         paymentMethod:"",
         category:"",
         photos:[],
         installments:""
         })
     })
     .catch((error) =>{
         console.log(error.message)
         console.log(body)
     })
}

     onChangeName = (event) =>{this.setState({name: event.target.value})}
     onChangePrice = (event) =>{this.setState({price: event.target.value})}
     onChangePaymentMethod = (event) =>{this.setState({paymentMethod: event.target.value})}
     onChangeInstallments = (event) =>{this.setState({installments: event.target.value})}
     onChangeCategory = (event) =>{this.setState({category: event.target.value})}
     onChangeDescription = (event) =>{this.setState({description: event.target.value})}
     onChangePhotos = (event) =>{this.setState({photos: event.target.value})}

     changePage = () => {
        this.setState({ list: !this.state.listProducts });
      };

 
    render() {
        const currentPage = this.state.listProducts ? <Sell/> : <ListProducts/>


        return (
            <div>
                <input value={this.state.name} onChange={this.onChangeName} placeholder="Nome"/>
                <input value={this.state.description} onChange={this.onChangeDescription}placeholder="Descrição"/>
                <input value={this.state.price} onChange={this.onChangePrice} placeholder="Preço"/>
                <input value={this.state.paymentMethod} onChange={this.onChangePaymentMethod}placeholder="Forma de Pgto"/>
                <input value={this.state.installments} onChange={this.onChangeInstallments}placeholder="Parcelas"/>
                <input value={this.state.category} onChange={this.onChangeCategory}placeholder="Categoria"/>
                <input value={this.state.photos} onChange={this.onChangePhotos}placeholder="URL Fotos"/>
                <button onClick={this.createProducts}>Criar Produtos</button>
                {currentPage}
                <button onClick={this.changePage}>Lista de Produtos</button>
            </div>
        )
    }
}

export default Sell