// @flow

import App from './Components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = () => {
  ReactDOM.render(
    <App
      {...store.getState()}
      onPeopleChange={value =>
        store.dispatch({
          type: 'UPDATE_PEOPLE',
          payload: {
            value
          }
        })}
      onSlicesChange={value =>
        store.dispatch({
          type: 'UPDATE_SLICES',
          payload: {
            value
          }
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
