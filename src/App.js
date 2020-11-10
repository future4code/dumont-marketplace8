//import { render } from '@testing-library/react';
import React from 'react'
//import { AppContainer } from './components/AppContainer'
import  Home  from './components/Home'
import styled from "styled-components";
import Buy from './components/Buy/Buy';
//import  Sell  from './components/Sell/Sell';
import SellAll from './components/Sell/SellAll';
import axios from "axios";


const Header =styled.div`
    background-color:#fffcef;
    padding: 1em;
    
    
`
const ImgLogo =styled.img`
   width:15em;
`

const Section = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42424e;
  
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  `



class App extends React.Component {

	state = { 
        currentScreen: "home",
        list: []
        
    };

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
    
    goShopping = () => {
        this.setState({ currentScreen: "sell" });
    };
    
    goSelling = () => {
        this.setState({ currentScreen: "buy" });
	};
	
	goBackHome = () => {
		this.setState ({currentScreen: "home"})
	}
    
    render() {

        const screenUpdate = () => {
            switch (this.state.currentScreen){
				case "home":
					return <Home sellButton ={this.goSelling} shopButton ={this.goShopping} />

                case "buy":
                    return <Buy sellButton ={this.goSelling} shopButton ={this.goShopping} list={this.state.list}/>;
                    
                case "sell":
                    return <SellAll sellButton ={this.goSelling} shopButton ={this.goShopping} 
                    list={this.state.list}
                    />;
                    
                default:
                    return <div>Erro! Página não encontrada</div>;
            }
		}
		
		return(
			<div>
				{screenUpdate()}
			</div>
		)
		}	
}


export default App

