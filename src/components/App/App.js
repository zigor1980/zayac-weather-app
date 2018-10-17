import React, { Component } from 'react';
import './App.css';
import Main from "../Man/Main";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            heigth: 0,
        };
        this.onResize = this.onResize.bind(this);
    }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  onResize() {
    this.setState({
        width: window.innerWidth,
        heigth: window.innerHeight,
    })
  }

  render() {
      let {heigth, width} = this.state;
      let size = {
        heigth,
        width,
      };
    return (
      <div className="App" >
        <Main size={size}/>
      </div>
    );
  }
}

export default App;
