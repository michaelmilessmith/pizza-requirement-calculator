import App from './Components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

const options = new Map();
options.set(16, "Two Mediums");
options.set(20, "Two Larges");
options.set(32, "Four Mediums");
options.set(36, "Two Larges, Two Mediums");
options.set(40, "Four Larges");
options.set(48, "Six Mediums");
options.set(52, "Two Larges, Four Mediums");
options.set(56, "Four Larges, Two Mediums");
options.set(60, "Six Larges");
options.set(64, "Eight Mediums");
options.set(68, "Two Larges, Six Mediums");
options.set(72, "Four Larges, Four Mediums");
options.set(76, "Six Larges, Two Mediums");
options.set(80, "Eight Larges");

const pizzaCalculator = (state = {people: 0, slices: 0 }, action) => {
  switch (action.type) {
    case 'UPDATE_PEOPLE':
      return {people: action.value, slices: state.slices };
    case 'UPDATE_SLICES':
      return {people: state.people, slices: action.value };
    default: return state;
  }
}
const store = createStore(pizzaCalculator);
const render = () => {
  ReactDOM.render(
    <App
      store={store.getState()}
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
