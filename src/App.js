import React, { Component } from 'react'
import './App.css'
import ItemList from './ItemList'
import Item from './Item'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <h1>The Fitness Shop</h1>
          <div className="tabs is-centered is-boxed is-medium">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/BestSellers">Best Sellers</Link>
              </li>
              <li>
                <Link to="/Featured">Featured</Link>
              </li>
              <li>
                <Link to="/All Items">All Items</Link>
              </li>
            </ul>
          </div>
          <ItemList />
          <Item />
        </main>
      </Router>
    )
  }
}

export default App
