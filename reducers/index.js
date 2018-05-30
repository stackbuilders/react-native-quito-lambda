import { LOADING_RESOURCE,
         LOADED_RESOURCE,
         LOAD_RESOURCE_ERROR } from '../actions';

export const updateObj = (obj, props) => {
  return Object.assign({}, obj, props);
};

const nullRes = { status: null, data: null };

const initialState = {
  waiting: false,
  response: nullRes,
  error: null
};

const loadResourceReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOADING_RESOURCE:
    return updateObj(state, {
      waiting: true,
      response: nullRes,
      error: null
    });
  case LOADED_RESOURCE:
    return updateObj(state, {
      waiting: false,
      response: { data: action.data, status: action.status },
      error: null
    });
  case LOAD_RESOURCE_ERROR:
    return updateObj(state, {
      response: nullRes,
      error: action.error,
      waiting: false
    });
  default:
    return state;
  };
};

export default loadResourceReducer;
