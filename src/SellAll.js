import React from "react";
import Sell from "./components/Sell/Sell";
import ListProducts from "./components/Sell/ListProducts";


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
      <div className="App">
        {currentPage}
        <button onClick={this.changePage}>Lista de Produtos</button>
      </div>
    );
  }
}
export default SellAll