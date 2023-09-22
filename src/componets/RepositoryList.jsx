import React from "react";
import { Text, FlatList } from "react-native";
import respositories from "../data/respositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      data={respositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    ></FlatList>
  );
};

export default RepositoryList;
