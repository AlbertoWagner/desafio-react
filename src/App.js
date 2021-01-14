import React, { Component } from 'react';
import api from './api';
import Headers from './Headers';
import Tabela from './Table/index';



class App extends Component{
  state = {
    produtos : [],

  }

  async componentDidMount(){
    const response = await api.get('')
    this.setState({produtos: response.data})
  }

  render(){
     const {produtos} = this.state
    return(


      <div>
    <Headers  />
    <Tabela produtos={produtos}/>
      </div>
    );
  };
};

export default App;
