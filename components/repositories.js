import React from "react";
import { View } from "react-native";

import Repository from "./repository"

export default class Repositories extends React.Component {
  componentDidMount() {
    this.props.getRepos();
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        {this.props.repos.map((repo, i) =>
          <Repository key={i} repo={repo} />
        )}
      </View>
    );
  }
}
