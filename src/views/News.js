import React, { Component } from 'react'
import NewsPost from '../components/NewsPost';

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: []
        }
    }

    
    async componentDidMount() {
        let res = await fetch('https://newsapi.org/v2/everything?q=bikes&apiKey=807fb1b18013430bbe7d6c32da4978bb')
        let data = await res.json()
        this.setState({articles : data.articles})        
    }




  render() {
    return (
      <div className='container'>
          <div className='row'>
            {this.state.articles.map((a, i)=> <NewsPost key={i} article={a} />)}
          </div>
      </div>
    )
  }
}
