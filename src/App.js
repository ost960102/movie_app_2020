import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  }

  add   = () => {
    this.setState(current => ({
      count: current.count +1,
    }));
  };
  minus = () => {
    this.setState(current => ({
      count: current.count -1
    }));
  };
  render(){
    return( 
    <div>
      <h1>I'm a class component {this.state.count}</h1>
      <button onClick={this.add}>Add</button>&nbsp;&nbsp;&nbsp;
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
} //클래스 컴포넌트의 기본 골격

export default App;
