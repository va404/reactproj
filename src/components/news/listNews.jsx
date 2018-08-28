import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import Article from './article';
import { Link } from 'react-router-dom'
import '../../App.css'

export default class ListNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    getArticles = () => {
        requester.get('appdata', 'articles', 'kinvey').then(res => this.setState({ articles: res }))
    }
    componentDidMount = () => {
        this.getArticles()
    }
    render() {
        return (
            <div>
                
                <section id="viewCatalog">
                    {this.state.articles.map((a) => <Link to={`article/${a._id}`}><Article key={a._id} {...a} /></Link>)}
                </section>
            </div>
        )
    }
}