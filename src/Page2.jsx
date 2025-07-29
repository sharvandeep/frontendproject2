import React, { Component } from 'react'
import'./css/Page2.css'
import { Link } from 'react-router-dom'
import './CSS/Page2.css'

export default class  extends Component {
  render() {
    return (
      <div className="main1">
        <h1>Hello This is Page2</h1>
        <Link to="/">Go to home</Link>
        <br></br>
        <br></br>
        <Link to="/Page2">Go to Page2</Link>
      </div>
    )
  }
}