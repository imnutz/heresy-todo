export default {
  actions: [
    (id, checked) => ({ id, checked }),
    (checked) => ({ all: true, checked }),
    (id) => ({ deleteTodo: true, id })
  ],

  acceptors: [
    model => (proposal) => {
      let items = model.getItems();

      const { id, checked, all, deleteTodo } = proposal;
      if (id && items[id]) {
        items[id].checked = checked;
      }

      if (all) {
        Object.keys(items).forEach(key => {
          items[key].checked = checked;
        });
      }

      if (id && deleteTodo) {
        Object.keys(items).forEach(key => {
          if (items[key].id === id) {
            delete items[key];
          }
        });
      }

      return model;
    }
  ]
}
