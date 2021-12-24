import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
    static defaultProps = {
        category: 'all'
    }

    static propTypes = {
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = `https://inshortsapi.vercel.app/news?category=${this.props.category}`;
        this.setState({loading: true});
        let res = await fetch(url);
        let data = await res.json();
        this.setState({loading: false});
        this.setState({ articles: data.data });
    }

    handleTop = () => {
        document.body.scrolltop = 0; //for safari
        document.documentElement.scrollTop = 0; //for chrome, firefox, IE and opera
    }

    render() {
        const { category } = this.props;
        return (
            <div className="container my-3">
                <h1 className="text-center">Newsify - Top {category.charAt(0).toUpperCase() + category.slice(1) } Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title} description={element.content.slice(0, 120)} imageUrl={element.imageUrl} url={element.readMoreUrl?element.readMoreUrl:element.url} date={element.date} time={element.time} />
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex flex-row-reverse mt-2">
                    {!this.state.loading && <button type="button" className="btn btn-dark" onClick={this.handleTop}>&uarr; Back to top</button>}
                </div>
            </div>
        )
    }
}

export default News
