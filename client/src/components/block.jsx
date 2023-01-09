import React, { Component } from 'react';
import Transaction from './transaction';


class Block extends React.Component {
  state = {displayTransaction: false}

  toogleTransaction = ()=>{
    this.setState({displayTransaction: !this.state.displayTransaction});
  }

  showTransactions = (transactions)=>{
return transactions.map((transaction)=>{
  return(
    <div key={transaction.id}>
      <hr/>
      <Transaction transaction={transaction}/>
    </div>
  )
})
  }
    render() {
        const {timestamp, hash, data} = this.props.block;
        const hashDisplay = `${hash.substring(0,15)}...`
        const stringifyedData = JSON.stringify(data);
        const dataDisplay = stringifyedData.length > 35 ? `${stringifyedData.substring(0,15)}...` : stringifyedData
      
      
      return <div className='block'>
      <div>Hash: {hashDisplay}</div>
      <div>timestamp: {new Date(timestamp).toLocaleString()}</div>
      <div style={{cursor: 'pointer'}} onClick={this.toogleTransaction}>Data:{" "} {this.state.displayTransaction ? this.showTransactions(data) : <span className='show'>show showTransactions</span>}
      </div>
      </div>;
    }
}
 
export default Block ;