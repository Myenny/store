import React, { Component } from 'react'
import Data from './Data.json'

class ItemList extends Component {
  state = {}
  render() {
    console.log(Data)
    return (
      <div className="card">
        {Data.map((item, i) => {
          return (
            <div className="card-content" key={i}>
              <div className="media">
                <div className="media-content">
                  <img src={item.Picture} alt={item.Product} />
                  <p className="title is-4">{item.Product}</p>
                  <p className="subtitle is-6">{item.Category}</p>
                  <p>
                    {item.Price}
                    <button>Buy</button>
                  </p>
                  <p>{item.description}</p>
                  <p>Rating: {item.rating} Stars</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ItemList
