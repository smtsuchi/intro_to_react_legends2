import React, { Component } from 'react';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
          name: "Shoha",
          count: 1
        }
      }



    addToCount() {
    this.setState({count: this.state.count + 1})  
    }


    render() {
        return (
            <div>
                <h1> This is React!!</h1>
                <h2>This page is made by: {this.state.name}</h2>
                <h3>Count: {this.state.count}</h3>
                <button onClick={()=>this.addToCount()}>+</button>
            </div>
            
        )
    }
}
