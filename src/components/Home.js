import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import Buy from './Buy/Buy';
import Sell from './Sell/Sell';


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

class Home extends React.Component {
    state = { 
        currentScreen: "home"
    };
    
    goShopping = () => {
        this.setState({ currentScreen: "sell" });
    };
    
    goSelling = () => {
        this.setState({ currentScreen: "buy" });
    };
    
    render() {
        const screenUpdate = () => {
            switch (this.state.currentScreen){
                case "buy":
                    return <Buy/>;
                case "sell":
                    return <Sell/>;
                default:
                    return <div>Erro! Página não encontrada</div>;
            }
        };
    
        return(
            <div>
                <Header>
                    <ImgLogo src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e415fe9-43f0-4dc4-b950-e2818853cef1%2F2.png?table=block&id=ebade8dc-9faa-452f-9db2-31fc11607482&width=2730&userId=&cache=v2"/>
                </Header>
                <Section>
                    <b>O que você deseja fazer?</b>
                </Section>
                <Buttons>
                    {/* <Button variant="contained" color="tercery" onClick = {this.goShopping}>
                        Vender
                    </Button>
                    <Button variant="contained" color="secondary" onClick = {this.goSelling} >
                        Comprar
                    </Button> */}
                     <button onClick = {this.goShopping}>
                        Vender
                    </button>
                    <button onClick = {this.goSelling} >
                        Comprar
                    </button>
                </Buttons>
        
                {screenUpdate()}
                
            </div>
        );
    }
}

export default Home