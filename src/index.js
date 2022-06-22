import {header, addAnimation} from "./head";
import { eyeSpy, aettid, projectHeader, etchaSketch, blog, maeditt } from "./projects";
import {contact, footer} from "./contact";
import "./style.css"

  document.getElementById('root').append(header(), projectHeader(), etchaSketch(), eyeSpy(), aettid(), blog(), maeditt(), contact(), footer());

  window.addEventListener('DOMContentLoaded', (_event) => {
    addAnimation();
  });