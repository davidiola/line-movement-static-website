import {  GRAPH_DATA_REQUEST, GRAPH_DATA_RECEIVE, GRAPH_DATA_REJECT } from "../actions/types";

function createInitialState() {
  return {
    graphData: {},
    error: false,
    isFetching: true,
  }
}

export default function graphDataReducer(state = createInitialState(), action) {
  switch(action.type) {
    case GRAPH_DATA_REQUEST: {
      const isFetching = action.isFetching;
      return {
        ...state,
        isFetching,
      };
    }
    case GRAPH_DATA_RECEIVE: {
      const { graphData } = action.payload;
      const isFetching = action.isFetching;
      return {
        ...state,
        graphData,
        isFetching,
      };
    }
    case GRAPH_DATA_REJECT: {
      const errorOccurred = action.error;
      const errorMessage = action.payload;
      const isFetching = action.isFetching;
      return {
        ...state,
        graphData: errorMessage,
        error: errorOccurred,
        isFetching,
      };
    }
    default: {
      return state;
    }
  }
}
