export const LOADING_RESOURCE = 'LOADING_RESOURCE';
export const LOADED_RESOURCE = 'LOADED_RESOURCE';
export const LOAD_RESOURCE_ERROR = 'LOAD_RESOURCE_ERROR';

export const loadingResource = () => {
  return { type: LOADING_RESOURCE };
};

export const loadedResource = ({ status, data }) => {
  return {
    type: LOADED_RESOURCE,
    status,
    data
  };
};

export const loadResourceError = error => {
  return {
    type: LOAD_RESOURCE_ERROR,
    error
  };
};


// Thunk action
const fetchRepos = token => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const payload = {
    method: 'GET',
    headers
  };
  const request = new Request(`https://api.github.com/users/sebashack/repos`, payload);

  return fetch(request)
    .then(res => {
      if (res.status != 200) { return { status: res.status, repos: null }; }

      return res.json().then(json => {
	return { status: res.status, repos: json };
      });
    });
};

export const loadRepos_ = f => {
  return () => {
    return dispatch => {
      dispatch(loadingResource());
      return f()
        .then(({ status, repos }) => dispatch(loadedResource({ status, data: repos })),
	      error => dispatch(loadResourceError(error)));
    };
  };
};

export const loadRepos = loadRepos_(fetchRepos);
