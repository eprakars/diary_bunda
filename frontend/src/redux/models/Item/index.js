import axios from "axios";
import { action, thunk } from "easy-peasy";

const Item = {
  initialState: {
    loading: false,
    error: false,
    errorMessage: null,
    result: {},
  },

  beginFetch: action((state, payload = true) => {
    state.initialState.loading = payload;
    state.initialState.error = false;
    state.initialState.errorMessage = null;
  }),

  fetchAction: action((state, payload) => {
    state.initialState.result = payload;
    state.initialState.loading = false;
    state.initialState.error = false;
  }),

  error: action((state, error) => {
    state.initialState.loading = false;
    state.initialState.error = true;
    state.initialState.errorMessage = error;
  }),

  deleteItem: thunk(async (actions, payload) => {
    try {
      actions.beginFetch();
      const api = "http://localhost:8000/item";
      const request = await axios.get(api, {
        headers: {
          'Authorization': `Bearer ${payload}`
        }
      });
      actions.fetchAction(request.data);
    } catch (error) {
      actions.error(error.response.data.message);
    }
  }),

  updateItem: thunk(async (actions, payload) => {
    console.log(payload);
    try {
      actions.beginFetch();
      const api = `http://localhost:8000/item/${payload.id}/edit`;
      const request = await axios.post(api, {
        name: payload.name,
        quantity: payload.quantity
      }, {
        headers: {
          'Authorization': `Bearer ${payload.token}`
        }
      });
      actions.fetchAction(request.data);
    } catch (error) {
      actions.error(error.response.data.message);
    }
  }),
};

export default Item;
