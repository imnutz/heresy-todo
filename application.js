import { define, render, html } from "heresy";
import Todo from "./esm/todo/index";

import { samInstance, intents } from "./sam";

define('Todo', Todo);

const renderer = (state) => {
  const appEl = document.querySelector("#todo-app");
  render(appEl, html`<Todo .data=${state} .intents=${intents} />`)
}


samInstance.setRender(renderer);
intents.startApplication();
