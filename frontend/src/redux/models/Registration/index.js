import axios from "axios";
import { action, thunk } from "easy-peasy";

const Registration = {
  initialState: {
    loading: false,
    error: false,
    errorMessage: null,
    result: {},
    status: null,
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
    state.initialState.status = "finished";
  }),

  error: action((state, error) => {
    state.initialState.loading = false;
    state.initialState.error = true;
    state.initialState.errorMessage = error;
  }),

  setToken: action((state, payload) => {
    state.initialState.result.token = payload;
  }),

  postCreateInvestor: thunk(async (actions, payload) => {
    try {
      actions.beginFetch();
      const api = "http://localhost:8000/user/login";
      const request = await axios.post(api, payload);
      actions.fetchAction(request.data);
      actions.setToken(request.data.token);
    } catch (error) {
      actions.error(error.response.data.message);
    }
  }),
};

export default Registration;
