import {header, addAnimation} from "./head";
import { eyeSpy, aettid, projectHeader } from "./projects";
import {contact, footer} from "./contact";
import "./style.css"

  document.getElementById('root').append(header(), projectHeader(), eyeSpy(), aettid(), contact(), footer());

  window.addEventListener('DOMContentLoaded', (_event) => {
    addAnimation();
  });