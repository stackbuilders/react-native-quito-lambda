import React from "react";
import { ScrollView, Text } from "react-native";

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
      <ScrollView contentContainerStyle={style}>
	{renderRepos(response, waiting, error)}
      </ScrollView>
    );
  }
}
