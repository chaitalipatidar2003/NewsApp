import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, discription, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card mr-2" >

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                        
                    }}>
                        <span class="position-absolute    badge rounded-pill bg-danger" >
                            {source}  </span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{discription}...</p>

                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
                            <span class="badge rounded-pill bg-info text-dark">Read More</span>
                        </a>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem

