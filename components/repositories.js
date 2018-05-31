import React from "react";
import { ScrollView, Text } from "react-native";
import * as NB from "native-base";

import Repository from "./repository";

export const renderRepos = ({ status, data }, waiting, error) => {
  const successfulReq = status === 200;

  if (waiting) { return <Text> Loading repositories ... </Text>; }

  if (successfulReq) { return data.map((repo, i) => <Repository key={i} repo={repo} />); }

  return <Text> Upps, there was an unexpected error! </Text>;
};

export const style = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
};

export default class Repositories extends React.Component {
  componentDidMount() {
    this.props.loadRepos();
  }

  render() {

    const { response, error, waiting } = this.props;

    return (
      <NB.Container>
        <NB.Header>
          <NB.Body>
            <NB.Title>Repositories</NB.Title>
          </NB.Body>
        </NB.Header>
        <NB.Content>
          <NB.List>
            {renderRepos(response, waiting, error)}
          </NB.List>
        </NB.Content>
      </NB.Container>
    );
  }
}
