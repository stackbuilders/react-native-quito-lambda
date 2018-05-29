import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Repositories from "./containers/repositories";
import reducers from "./reducers";

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
  }
}
