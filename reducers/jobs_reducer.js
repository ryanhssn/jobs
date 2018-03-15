import { FETCH_JOBS } from '../actions/types';

const INITIAl_STATE = {
  results: []
}

export default function(state = INITIAl_STATE, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;
    default:
      return state;
  }
}
