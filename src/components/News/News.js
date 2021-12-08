import React, { Component } from 'react'

import { Logo } from '..';

import NewsItem from './NewsItem'



export default class News extends Component {
    
articles = []
    
constructor(){
       
 super();
        
this.state = {
            
articles: this.articles,
        
    loading: false
        }
  
  }
  
 async componentDidMount(){
     
  let url = `https://newsapi.org/v2/everything?apiKey=b08d9940cf81487ca305515f6bdb3d85`
       
  let data = await fetch(url)
       
  let parsedData = await data.json()
       
  this.setState({articles: parsedData.articles})
    }

   
 render() {
       
 return (
            
<div className="container my-3">
               
 <br /><br /><br />
            
<h2 >JagaranNews - Top Headlines</h2>
            
<div className="row">
           
{this.state.articles.map((element)=>{
             
return  <div className="col-md-4 mb-1" key={element.url} >
        
     <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage?element.urlToImage:Logo} newsUrl={element.url} />               
         
    </div>
           })}
       
    </div>
            
         
</div>
     
   )
   
 }

}
