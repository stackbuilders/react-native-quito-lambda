import React from "react";
import { Text, View } from "react-native";

const Repository = ({repo}) => (
  <View>
    <Text>{`${repo.name} --- ${repo.language}`}</Text>
  </View>
);

export default Repository;
