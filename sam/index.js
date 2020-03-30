import { createInstance, api } from "sam-pattern";

import initialState from "./initial_state";

import header from "./header";
import init from "./init";
import main from "./main";
import footer from "./footer";

const todoSam = api(createInstance());

todoSam.addInitialState(initialState);

const { intents: [createTodo] } = todoSam.addComponent(header);
const { intents: [startApplication] } = todoSam.addComponent(init);
const { intents: [markDone, markAllDone, deleteTodo] } = todoSam.addComponent(main);
const { intents: [clearCompleted, showActive, showCompleted, showAll] } = todoSam.addComponent(footer);

export const samInstance = todoSam;
export const intents = {
  startApplication,
  createTodo,
  markDone,
  markAllDone,
  clearCompleted,
  showActive,
  showCompleted,
  showAll,
  deleteTodo
};
