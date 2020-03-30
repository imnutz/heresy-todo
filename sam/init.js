import { data, STORAGE_KEY } from "../esm/todo/utils";

export default {
  actions: [
    () => ({ cached: data(STORAGE_KEY) })
  ],

  acceptors: [
    (model) => (proposal) => {
      if (proposal.cached) {
        const { id, items = {} } = proposal.cached;
        model.id = id;
        model.items = items;
      }

      return model;
    }
  ]
}
