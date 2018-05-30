import React from "react";
import { View, Text } from "react-native";

import Repository from "./repository"

export default class Repositories extends React.Component {
  componentDidMount() {
    this.props.getRepos();
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", paddingLeft: 10 }}>
        <View>
          <Text style={{ paddingTop: 40, fontSize: 30, fontWeight: "800" }}>Repositories</Text>
        </View>
        {this.props.repos.map((repo, i) =>
          <Repository key={i} repo={repo} />
        )}
      </View>
    );
  }
}
