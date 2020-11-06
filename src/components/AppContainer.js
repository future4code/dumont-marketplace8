import React, { Component } from 'react';
import Buy from './Buy/Buy';
import Sell from './Sell/Sell';

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <Buy />
        <hr />
        <Sell />
      </div>
    )
  }
}
