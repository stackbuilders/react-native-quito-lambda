import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import * as resource from '../actions';

const statusOk = 200;
const repo = {
  name: 'Foo',
  language: 'Bar'
};
const reqError = 'Some error';

const successfulRequest = () => Promise.resolve({ status: statusOk, repos: [] });
const failedRequest = () => Promise.reject(reqError);
export const mockDispatch = x => Promise.resolve(x);

describe('LoadResource actions', () => {
  test('loadingResource returns a correct LOADING_RESOURCE action', () => {
    expect(resource.loadingResource())
      .toEqual({ type: resource.LOADING_RESOURCE});
  });

  test('loadedResource returns a correct LOADED_RESOURCE action', () => {
    expect(resource.loadedResource({ data: repo, status: statusOk })).toEqual({
      type: resource.LOADED_RESOURCE,
      status: statusOk,
      data: repo
    });
  });

  test('loadResourceError returns a correct LOAD_RESOURCE_ERROR action', () => {
    expect(resource.loadResourceError(reqError)).toEqual({
      error: reqError,
      type: resource.LOAD_RESOURCE_ERROR
    });
  });

  describe('loadRepos', () => {
    it('dispatches LOADED_RESOURCE when successful', () => {
      const loadRepos = resource.loadRepos_(successfulRequest)();
      return loadRepos(mockDispatch)
        .then(action => expect(action).toEqual({
	  data: [],
	  status: statusOk,
	  type: resource.LOADED_RESOURCE
	}));
    });
  });

  it('dispatches LOAD_RESOURCE_ERROR when the request fails', () => {
    const loadRepos =
	    resource.loadRepos_(failedRequest)();
    return loadRepos(mockDispatch)
      .then(action => expect(action).toEqual({
	error: reqError,
	type: resource.LOAD_RESOURCE_ERROR
      }));
  });
});
