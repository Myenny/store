import React, { Component } from 'react'
import Data from './Data.json'

class ItemList extends Component {
  state = {}
  render() {
    console.log(Data)
    return (
      <div className="card">
        <div className="card-image">
          <img src="https://images-na.ssl-images-amazon.com/images/I/61-npvcL4-L._AC_UL200_SR200,200_.jpg" />
        </div>
        {Data.map((item, i) => {
          return (
            <div className="card-content" key={i}>
              <div className="media">
                <img src={item.Picture} alt={item.Product} />
                <p>{item.Product}</p>
                <p>{item.Category}</p>
                <p>{item.Price}</p>
                <p>{item.description}</p>
                <p>{item.rating}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ItemList
