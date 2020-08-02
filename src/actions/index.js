import axios from 'axios';
import { GRAPH_DATA_REQUEST, GRAPH_DATA_RECEIVE, GRAPH_DATA_REJECT } from './types';
import { API_G_BASE_URL, PROD_PATH, GRAPH_PATH } from '../constants/';

function requestGraphData() {
  return {
    isFetching: true,
    type: GRAPH_DATA_REQUEST,
  };
}

function receiveGraphData(responseData) {
  return {
    payload: {
      graphData: responseData.graphData,
    },
    isFetching: false,
    type: GRAPH_DATA_RECEIVE,
  };
}

function rejectGraphData(error) {
  return {
    error: true,
    payload: error,
    isFetching: false,
    type: GRAPH_DATA_REJECT,
  };
}

function fetchGraphData() {
  return (dispatch) => {
    dispatch(requestGraphData());
    const url = API_G_BASE_URL + '/' + PROD_PATH + '/' + GRAPH_PATH
    axios
      .get(url, {
        params: {
          homeTeam: 'Dallas-Mavericks',
          awayTeam: 'Houston-Rockets',
          date: '07-31-2020'
        }
      })
      .then((response) => dispatch(receiveGraphData(response.data)))
      .catch((error) => {
        dispatch(rejectGraphData(error));
      });
  };
}

export { fetchGraphData };