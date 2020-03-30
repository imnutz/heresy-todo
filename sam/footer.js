export default {
  actions: [
    // clear complete
    () => ({ clearCompleted: true }),

    // show active items
    () => ({ showActive: true }),

    // show completed items
    () => ({ showCompleted: true }),

    // show all
    () => ({ showAll: true })
  ],
  acceptors: [
    model => proposal => {
      const { clearCompleted, showActive, showCompleted, showAll } = proposal;
      let items = model.getItems();

      if (clearCompleted) {
        Object.keys(items).forEach(key => {
          if (items[key].checked)
            delete items[key];
        });
      } else if (showActive) {
        model.displayActive = true;
        model.displayCompleted = false;
        model.displayAll = false;
      } else if (showCompleted) {
        model.displayActive = false;
        model.displayCompleted = true;
        model.displayAll = false;
      } else if (showAll) {
        model.displayAll = true;
        model.displayActive = false;
        model.displayCompleted = false;
      }

      return model;
    }
  ]
}
