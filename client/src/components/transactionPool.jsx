import React, { Component } from "react";
import axios from "axios";
import Transaction from "./transaction";
import { Link } from "react-router-dom";

class TransactionPool extends Component {
  state = { transactionMap: {} };

  async getTransactions() {
    const response = await axios.get(
      `${document.location.origin}/api/transaction-pool-map`
    );
    this.setState({ transactionMap: response.data });
  }

  componentDidMount() {
    alert('mounted')
    this.getTransactions();
    this.getTransactionsInterval = setInterval(() => {
      this.getTransactions();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.getTransactionsInterval);
  }

handleMine = async ()=>{
  await axios.get(`${document.location.origin}/api/mine-transactions`);
  alert('success');
  document.location.push('/');
}

  render() {
    return (
      <div className="transaction-pool">
        <img src="/images/pool.png" alt="" />
        <Link to="/">
          <button>back to home</button>
        </Link>
        <button onClick={this.handleMine}>mine transactions</button>
        {Object.values(this.state.transactionMap).map((transaction) => {
          return (
            <div key={transaction.id}>
              <hr />
              <Transaction transaction={transaction} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TransactionPool;
