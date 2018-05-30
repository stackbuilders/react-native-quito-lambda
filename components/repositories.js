import React from "react";
import { View, Text } from "react-native";
import * as NB from "native-base";

import Repository from "./repository"

export default class Repositories extends React.Component {
  componentDidMount() {
    this.props.getRepos();
  }

  render() {
    return (
      <NB.Container>
        <NB.Header>
          <NB.Left />
          <NB.Body>
            <NB.Title>Repositories</NB.Title>
          </NB.Body>
          <NB.Right />
        </NB.Header>
        <NB.Content>
          <NB.List>
            {this.props.repos.map((repo, i) =>
              <Repository key={i} repo={repo} />
            )}
          </NB.List>
        </NB.Content>
      </NB.Container>
    );
  }
}
