// @flow

import App from './Components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducer'
import { updatePeople, updateSlices, toogleBogof, updateCost } from './actions'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = () => {
  ReactDOM.render(
    <App
      {...store.getState()}
      onPeopleChange={value => store.dispatch(updatePeople(value))}
      onSlicesChange={value => store.dispatch(updateSlices(value))}
      onBogofChange={value => store.dispatch(toogleBogof())}
      onCostChange={value => store.dispatch(updateCost(value))}
    />,
    document.getElementById('container')
  )
}

store.subscribe(render)
render()
