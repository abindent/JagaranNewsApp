import React, { Component } from 'react'
import {Navbar, Footer, News, About} from "./components/index"
import MetaTags from "react-meta-tags";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
   api = process.env.REACT_APP_NEWS_API;
    state = {
          progress: 0,
   }
    setProgress = (progress)=>{
         this.setState({progress: progress})
    }
    render() {
        return (
        <>
           <Router>
          <LoadingBar color='#ffffff' height={3} progress={this.state.progress}  />
          <Navbar />
       <Switch>
         <Route path="/" exact><MetaTags><title>Home - JagaranNews</title></MetaTags><News setProgress={this.setProgress}  api={this.api}key="headlines" head="Top Headlines"  pageSize={6} country="in" category="general"/></Route>
         <Route path="/general" exact><MetaTags><title>General - JagaranNews</title></MetaTags><News setProgress={this.setProgress}  api={this.api} key="general" head="General" pageSize={6} country="in" category="general" /></Route>
 
         <Route path="/business" exact><MetaTags><title>Business - JagaranNews</title></MetaTags><News setProgress={this.setProgress}  api={this.api} key="business" head="Business" pageSize={6} country="in" category="business" nactive="active"/></Route>
             
        <Route path="/entertainment" exact><MetaTags><title>Entertainment - JagaranNews</title></MetaTags><News setProgress={this.setProgress}  api={this.api} key="entertainment" head="Entertainment"  pageSize={6} country="in" category="entertainment" /></Route>
 
         <Route path="/health" exact><MetaTags><title>Health -  JagaranNews</title></MetaTags><News setProgress={this.setProgress}  api={this.api} key="health" head="Health"  pageSize={6} country="in" category="health" /></Route>
 
         <Route path="/science" exact><MetaTags><title>Science - JagaranNews</title></MetaTags><News setProgress={this.setProgress}  api={this.api} key="science" head="Science" pageSize={6} country="in" category="science"/></Route>
 
         <Route path="/sports" exact><MetaTags><title>Sports - JagaranNews</title></MetaTags><News setProgress={this.setProgress}  api={this.api} key="sports" head="Sports" pageSize={6} country="in"category="sports"/></Route>
 
         <Route path="/technology" exact><MetaTags><title>Technology - JagaranNews</title></MetaTags><News setProgress={this.setProgress}  api={this.api} key="technology" head="Technology" pageSize={6} country="in" category="technology"/></Route>
 
         <Route path="/contact" exact><MetaTags><title>Contact- JagaranNews</title></MetaTags><div className="mt-5" id="ff-compose">  </div></Route>
         <Route path="/about" exact><MetaTags><title>About- JagaranNews</title></MetaTags><About  /></Route>
   </Switch>
          <Footer />
           </Router>
       </>
        )
    }
}