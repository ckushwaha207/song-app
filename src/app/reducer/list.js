import { createReducer } from "reduxsauce";

import { Types } from "../action/actionCreator";

export const INITIAL_STATE = {
  parseListLoaded: false,
  listLoaded: false,
  list: [],
  error: false,
  errorMessage: ""
};

export const listRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  parseListLoaded: false,
  listLoaded: false
});

export const listSuccess = (state = INITIAL_STATE, action) =>{ 
  return({
  ...state,
  parseListLoaded: true,
  listLoaded: true,
  list: action.songList,
  error: false
})};

export const listFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  parseListLoaded: false,
  listLoaded: false,
  list: {},
  error: true,
  errorMessage: action.error
});

export const HANDLERS = {
  [Types.LIST_REQUEST]: listRequest,
  [Types.LIST_SUCCESS]: listSuccess,
  [Types.LIST_FAILURE]: listFailure
};

export default createReducer(INITIAL_STATE, HANDLERS);
