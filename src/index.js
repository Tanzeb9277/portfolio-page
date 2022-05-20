import {header, addAnimation} from "./head";
import { eyeSpy } from "./projects";
import "./style.css"

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hello, webpack';
    element.classList.add('hello');
  
    return element;
  }
  
  document.getElementById('root').append(header(), eyeSpy());

  window.addEventListener('DOMContentLoaded', (_event) => {
    addAnimation();
  });