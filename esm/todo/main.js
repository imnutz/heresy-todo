import {ref} from 'heresy';

import List from './list.js';

export default {
  extends: 'section',
  includes: {List},

  mappedAttributes: ['data'],
  ondata() { this.render(); },

  getActiveItems() {
    const items = this.data.items;
    return Object.keys(items).reduce((result, key) => {
      if (!items[key].checked) {
        result[key] = items[key];
      }

      return result;
    }, {});
  },

  getCompletedItems() {
    const items = this.data.items;
    return Object.keys(items).reduce((result, key) => {
      if (items[key].checked) {
        result[key] = items[key];
      }

      return result;
    }, {});
  },

  render() {
    const { displayActive, displayCompleted, displayAll } = this.data;
    let items = {};

    if (displayActive) {
      items = this.getActiveItems();
    } else if (displayCompleted) {
      items = this.getCompletedItems();
    } else if (displayAll) {
      items = this.data.items;
    }

    this.html`
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <List
        class="todo-list"
        ref=${ref(this, 'list')}
        .items=${items}
      />
    `;
  }
};
