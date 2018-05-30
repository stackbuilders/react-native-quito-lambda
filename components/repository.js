import React from "react";
import { Text, View } from "react-native";

const Repository = ({repo}) => (
  <View style={{ flex: 1, flexDirection: "row" }}>
    <View style={{ flex: 1 }}>
      <Text>{repo.name}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text>{repo.language}</Text>
    </View>
  </View>
);

export default Repository;
