import React, { Component } from 'react'

class ItemList extends Component {
  state = {}
  render() {
    return (
      <>
        <div class="card">
          <div class="card-image">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/61-npvcL4-L._AC_UL200_SR200,200_.jpg"
              alt="Placeholder image"
            />
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">iPhone X</p>
                <p class="subtitle is-6">Car Air Vent Mount </p>
                <p>Price: $</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/61-npvcL4-L._AC_UL200_SR200,200_.jpg"
              alt="Placeholder image"
            />
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">iPhone 8</p>
                <p class="subtitle is-6">Car Air Vent Mount </p>
                <p>Price: $</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ItemList
