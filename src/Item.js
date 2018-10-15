import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class Item extends Component {
  state = {}
  render() {
    return (
      <>
        <h1>Gold Standard Protien</h1>
        <img src="https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw33b26f87/hi-res/350280_1.jpg?sw=350&sh=350&sm=fit" />
        <p>price</p>
        <Route
          render={({ history }) => (
            <button
              type="button"
              onClick={() => {
                history.push('/BestSeller')
              }}
            >
              Buy!
            </button>
          )}
        />
      </>
    )
  }
}

export default Item
