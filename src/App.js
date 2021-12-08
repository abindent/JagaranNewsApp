import React, { Component } from 'react'
import {Navbar, Footer, News} from "./components/index"
import MetaTags from "react-meta-tags";

export default class App extends Component {
    render() {
        return (
           <>
           <MetaTags>
           <title>Home - JagaranNews</title>
           </MetaTags> 
          <Navbar />
          <News /> 
          <Footer />
           </>
        )
    }
}

