import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import loadResourceReducer from '../reducers';
import * as resource from '../actions';

const name = 'Foo';
const language = 'Bar';
const status = 200;
const error = 'Some Error';

export const flip = f => (b, a) => { return f(a = undefined, b); };
const loadResourceReducer_ = flip(loadResourceReducer);

describe('LoadResource reducer', () => {
  test('correcty updates the state when given a LOADING_RESOURCE action', () => {
    expect(loadResourceReducer_({
      type: resource.LOADING_RESOURCE
    })).toEqual({
      error: null,
      response: { data: null, status: null },
      waiting: true
    });
  });

  test('correcty updates the state when given a LOADED_RESOURCE action', () => {
    expect(loadResourceReducer_({
      type: resource.LOADED_RESOURCE,
      data: { name, language },
      status
    })).toEqual({
      error: null,
      response: { data: { name, language }, status },
      waiting: false
    });
  });

  test('correcty updates the state when given a LOAD_PROFILE_ERROR action', () => {
    expect(loadResourceReducer_({
      type: resource.LOAD_RESOURCE_ERROR,
      error
    })).toEqual({
      error,
      response: { data: null, status: null },
      waiting: false
    });
  });
});
