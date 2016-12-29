import App from './Components/App';
import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(
  <App options={options}/>,
  document.getElementById('container')
);
