import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ItemIssue from "../components/ItemIssue";
import MainHeader from "../components/MainHeader";
import { User } from "../models/User";

interface IssueProps {
  navigation: StackNavigationProp<ParamListBase, "Issue">;
  route: any;
}

const fakeData = [1, 2, 3, 4];

const Issue: FC<IssueProps> = ({ navigation }) => {
  // const user: User = route.params.data;
  // console.log(user.phoneNumber)
  return (
    <View style={styles.container}>
      <MainHeader
        navigation={navigation}
        title="Issue"
        isMain={true}
      ></MainHeader>
      <FlatList
        style={styles.flatList}
        data={fakeData}
        renderItem={() => ItemIssue()}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    margin: 20,
  },
});

export default Issue;
