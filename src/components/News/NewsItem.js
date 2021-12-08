import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (    
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="img" />
                <div className="card-body">
                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex: "1"}}>{source}</span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                   <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                </div>
                </div>
        )
    }
}