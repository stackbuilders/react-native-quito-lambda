import React from "react";
import { Text, View } from "react-native";
import * as NB from "native-base";

const Repository = ({repo}) => (
  <NB.ListItem>
    <Text>{repo.name} - {repo.language}</Text>
  </NB.ListItem>
);

export default Repository;
