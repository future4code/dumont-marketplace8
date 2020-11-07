import React from 'react';
import axios from "axios";
//import SellAll from '../../SellAll';
//import ListProducts from './components/Sell/ListProducts';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const FormContainer =styled.div`
    background-color:#fffcef;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    
`
const InputContainer=styled.div`
    margin:0.5em;
`

class Sell extends React.Component {
 state ={
    products:[
    {
    name: "",
    description:"",
    price:"",
    paymentMethod:"",
    category:"",
    photos:[],
    installments:"",
    
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
         alert("Produto Criado com sucesso!!!!!")
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

     

    render() {
        
        return (<div>
            
           <FormContainer>
               <InputContainer>
                    <TextField required id="outlined-required" label="Nome" value={this.state.name} variant="outlined"onChange={this.onChangeName}/>
               </InputContainer>

               <InputContainer>
                    <TextField required id="outlined-required" label="Descrição" value={this.state.description} variant="outlined"onChange={this.onChangeDescription} />
                </InputContainer>

                <InputContainer>
                    <TextField id="outlined-number" label="Preço" type="number" value={this.state.price}  variant="outlined" onChange={this.onChangePrice}/>
                </InputContainer>

                <InputContainer>
                    <TextField required id="outlined-required" label="Forma de Pagamento" value={this.state.paymentMethod} variant="outlined"onChange={this.onChangePaymentMethod}/>
                </InputContainer>

                <InputContainer>
                    <TextField id="outlined-number" label="Parcelas" type="number" value={this.state.installments} variant="outlined" onChange={this.onChangeInstallments}/>
                </InputContainer>

                <InputContainer>
                    <TextField required id="outlined-required" label="Categoria" value={this.state.category} variant="outlined"onChange={this.onChangeCategory}/>
                </InputContainer>

                <InputContainer>
                    <TextField required id="outlined-required" label="Endereço da Imagem" value={this.state.photos} variant="outlined"onChange={this.onChangePhotos}/>
                </InputContainer>

                <InputContainer>            
                    <Button variant="contained" color="primary"onClick={this.createProducts}>
                        Criar o meu produto!
                     </Button>
                </InputContainer>
            </FormContainer>
        </div>

        )
    }
}

export default Sell