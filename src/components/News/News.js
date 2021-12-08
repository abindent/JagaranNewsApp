import React, { Component } from 'react'
import { Logo } from '../index';
import NewsItem from './NewsItem'
import Spinner  from '../Spinner/Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    static deafultProps = {
       country : "in",
       pageSize: 6,
       category: "general",
       head: "Top Headlines",
       page: 1
    }
    static propTypes = {
       country: PropTypes.string,
       pageSize: PropTypes.number,
       category: PropTypes.string,
       head: PropTypes.string,
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount(){
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
        this.props.setProgress(10);
        let data = await fetch(url)
        this.props.setProgress(30); 
        let parsedData = await data.json()
        this.props.setProgress(50);
        this.setState({articles: parsedData.articles,  totalResults: parsedData.totalResults, loading: false})
        this.props.setProgress(100);
    }
    
   fetchMoreData = async()=>{
           this.setState({page: this.state.page + 1})
           const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          let data = await fetch(url);
          let parsedData = await data.json()
          this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false  
        })
      }


    render() {
        return (
            <div className="my-3">
                <br /><br /><br />
            <h1 className="text-center mb-5">JagaranNews -&nbsp;{this.props.head}</h1>
        {this.state.loading && <Spinner />}
       <InfiniteScroll  dataLength={this.state.articles.length}  next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults}  loader={ <Spinner/>}  >
      <div className="container">    
      <div className="row">
          {this.state.articles.map((element)=>{
             return  <div className="col-md-4 mb-1" key={element.url} >
              <NewsItem source={element.source.name} title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:Logo} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt}  />               
              </div>
           })}
      </div>
      </div>
</InfiniteScroll>
  
         </div>
        )
    }
}
