import { action, thunk } from "easy-peasy";
// Example case

const Homepage = {
    initialState: {
        loading: true,
        error: false,
        errorMessage: null,
        result: {},
    },

    beginFetch: action((state, payload) => {
        state.initialState.loading = true;
        state.initialState.error = false;
        state.initialState.errorMessage = null;
    }),

    fetchAction: action((state, payload, actions) => {
        state.initialState.result = payload;
        state.initialState.result.length = payload.length;
    }),

    error: action((state, error) => {
        state.initialState.loading = false;
        state.initialState.error = true;
        state.initialState.errorMessage = error;
    }),

    getData: thunk(async (actions, payload) => {
        try {
            // Begin Fetch Action and Fetch Action
        } catch (error) {
            actions.error(error.message);
        }
    }),
};

export default Homepage;
