import React from "react";
import thunkMiddleware from 'redux-thunk';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import Repositories from "./containers/repositories";
import reducers from "./reducers";

const middlewares = applyMiddleware(thunkMiddleware);

const store = createStore(reducers, middlewares);

export default class App extends React.Component {
  state = { loading: true }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
  }
}
