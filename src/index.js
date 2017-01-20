import App from './Components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { options } from './pizzaOptions'

const pizzaCalculator = (state = {people: 0, slices: 0 }, action) => {
  switch (action.type) {
    case 'UPDATE_PEOPLE':
      return {people: action.value, slices: state.slices };
    case 'UPDATE_SLICES':
      return {people: state.people, slices: action.value };
    default: return state;
  }
}
const store = createStore(pizzaCalculator, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const render = () => {
  ReactDOM.render(
    <App
      {...store.getState()}
      options={options}
      onPeopleChange={(value) =>
        store.dispatch({
        type: 'UPDATE_PEOPLE',
        value: value
      })}
      onSlicesChange={(value) =>
        store.dispatch({
        type: 'UPDATE_SLICES',
        value: value
      })}/>,
    document.getElementById('container')
  );
};

store.subscribe(render);
render();
