import React, { Component } from 'react'

export default class NewsPost extends Component {
    render() {
        const a = this.props.article
        return (
            <div className="card">
                <img src={a.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{a.title}</h5>
                        <h6>{a.source.name} - {a.author}</h6>
                        <p className="card-text">{a.description}</p>
                        <a href={a.url} target="_blank" className="btn btn-primary">Go to article</a>
                    </div>
            </div>
        )
    }
}
