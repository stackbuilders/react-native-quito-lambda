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
});
