import React from "react";
import { Text, View } from "react-native";

const Repository = ({repo}) => (
  <View>
    <View>
      <Text>{repo.name}</Text>
    </View>
    <View>
      <Text>{repo.language}</Text>
    </View>
  </View>
);

export default Repository;
