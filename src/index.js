// @flow

import App from './Components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const pizzaCalculator = (
  state = { people: 0, slices: 0, bogof: true },
  action
) => {
  switch (action.type) {
    case 'UPDATE_PEOPLE':
      return Object.assign({}, state, { people: action.value })
    case 'UPDATE_SLICES':
      return Object.assign({}, state, { slices: action.value })
    case 'TOOGLE_BOGOF':
      return Object.assign({}, state, { bogof: !state.bogof })
    default:
      return state
  }
}
const store = createStore(
  pizzaCalculator,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const render = () => {
  ReactDOM.render(
    <App
      {...store.getState()}
      onPeopleChange={value =>
        store.dispatch({
          type: 'UPDATE_PEOPLE',
          value: value
        })}
      onSlicesChange={value =>
        store.dispatch({
          type: 'UPDATE_SLICES',
          value: value
        })}
      onBogofChange={value =>
        store.dispatch({
          type: 'TOOGLE_BOGOF'
        })}
    />,
    document.getElementById('container')
  )
}

store.subscribe(render)
render()
