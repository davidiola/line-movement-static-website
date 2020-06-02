import axios from "axios";
import { GRAPH_DATA_RECEIVE, GRAPH_DATA_REJECT } from "./types";

function receiveGraphData(responseData) {
  return {
    payload: {
      graphData: responseData.graphData,
    },
    type: GRAPH_DATA_RECEIVE,
  };
}

function rejectGraphData(error) {
  return {
    error: true,
    payload: error,
    type: GRAPH_DATA_REJECT,
  };
}

function fetchGraphData() {
  return (dispatch) => {
    const url = 'https://0vrkkb9m05.execute-api.us-east-1.amazonaws.com/test/graph';
    axios
      .get(url, {
        params: {
          homeTeam: 'Cleveland-Cavaliers',
          awayTeam: 'Philadelphia-76ers',
          date: '02-26-2020'
        }
      })
      .then((response) => dispatch(receiveGraphData(response.data)))
      .catch((error) => {
        dispatch(rejectGraphData(error));
      });
  };
}

export { fetchGraphData };