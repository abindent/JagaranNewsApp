import React, { Component } from 'react'
import {Logo} from "../index"

export class Footer extends Component {
    FooterStyle = {
       top: "-100%",
    }
    render() {
        return (
            <div>
 <footer style={this.FooterStyle} className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2022 JagaranNews</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img src={Logo} width="15%" alt="Favicon" />
    </a>

    <ul className="nav col-md-4 justify-content-end">
 <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li> 
 <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">About</a></li>

<li className="nav-item"><a href="/conatct" className="nav-link px-2 text-muted">Contact</a></li>
    </ul>
  </footer>
            </div>
        )
    }
}

export default Footer

