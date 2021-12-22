import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl , url} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." style={{height: "250px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} rel='noreferrer' target="_blank" className="btn btn-sm btn-dark">read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
