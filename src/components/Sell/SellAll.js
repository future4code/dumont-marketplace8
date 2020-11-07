import React from "react";
import Sell from "./Sell";
import ListProducts from "./ListProducts";
import Button from '@material-ui/core/Button';
import styled from "styled-components"


const CabecalhoSell =styled.div`
    background-color:#fffcef;
    padding: 1em;
    display:flex;
    justify-content:space-between;
    align-items: center;
    
`
const ImgLogo =styled.img`
   width:10em;
`

class SellAll extends React.Component {
  state = {
    sell: true
  };

  changePage = () => {
    this.setState({ sell: !this.state.sell });
  };

  render() {
    const currentPage = this.state.sell ? <Sell /> : <ListProducts />;

    return (
      <div>
        <CabecalhoSell>
          <ImgLogo src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e415fe9-43f0-4dc4-b950-e2818853cef1%2F2.png?table=block&id=ebade8dc-9faa-452f-9db2-31fc11607482&width=2730&userId=&cache=v2"/>
                
          <Button variant="contained" color="secondary" onClick={""}>
            Mas eu quero comprar também!!
          </Button>
        </CabecalhoSell>

        {currentPage}

        <Button variant="contained" color="secondary"onClick={this.changePage}>Ver Produtos/voltar</Button>
        
      </div>
    );
  }
}
export default SellAll