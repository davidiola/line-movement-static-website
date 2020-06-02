import {  GRAPH_DATA_RECEIVE, GRAPH_DATA_REJECT } from "../actions/types";

function createInitialState() {
  return {
    graphData: {},
    error: false
  }
}

export default function graphDataReducer(state = createInitialState(), action) {
  switch(action.type) {
    case GRAPH_DATA_RECEIVE:
      const { graphData } = action.payload;
      return {
        ...state,
        graphData,
      };
    case GRAPH_DATA_REJECT:
      const { errorOccurred } = action.error;
      const { errorMessage } = action.payload;
      return {
        ...state,
        graphData: errorMessage,
        error: errorOccurred,
      };
    default: {
      return state;
    }
  }
}
