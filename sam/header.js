import { update, STORAGE_KEY } from "../esm/todo/utils";

export default {
  actions: [
    (value) => {
      return {
        todo: value
      };
    }
  ],
  acceptors: [
    model => (proposal) => {
      if (proposal.todo) {
        const nextId = model.id + 1;

        model.items[nextId] = {
          text: proposal.todo,
          checked: false,
          id: nextId
        }
        model.id = nextId;

        update(STORAGE_KEY, {
          id: model.id,
          items: model.items
        });
      }

      return model;
    }
  ]
}
