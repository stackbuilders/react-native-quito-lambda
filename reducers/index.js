import { GET_REPOS } from '../actions';

const initialState = {
  repos: []
};

export default function(state = initialState, action) {
  if (action.type === GET_REPOS) {
    return {
      repos: [
        { name: "Repo 1", language: "Haskell" },
        { name: "Repo 2", language: "Ruby" }
      ]
    };
  }
  return state;
};
