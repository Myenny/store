import React, { Component } from 'react'
import './App.css'
import ItemList from './ItemList'
import Item from './Item'

class App extends Component {
  render() {
    return (
      <main>
        <h1>iShop</h1>
        <div className="tabs is-centered is-boxed is-medium">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Best seller</a>
            </li>
            <li>
              <a>Featured</a>
            </li>
            <li>
              <a>All Items</a>
            </li>
          </ul>
        </div>
        <ItemList />
        <Item />
      </main>
    )
  }
}

export default App
