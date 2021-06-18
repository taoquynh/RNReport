import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import ItemIssue from "../components/ItemIssue";
import MainHeader from "../components/MainHeader";
import { getIssuesAction } from "../reduxs/actions";

import { RootState } from "../reduxs/reducers";

interface IssueProps {
  navigation: StackNavigationProp<ParamListBase, "Issue">;
  route: any;
}

const fakeData = [1, 2, 3, 4];

const Issue: FC<IssueProps> = ({ navigation /*route*/ }) => {
  // const user: User = route.params.data;
  // console.log(user.phoneNumber)

  const issueDatas = useSelector((state: RootState) => state.issue.data)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIssuesAction());
    
  }, []);

  return (
    <View style={styles.container}>
      <MainHeader
        navigation={navigation}
        title="Issue"
        isMain={true}
      ></MainHeader>
      <FlatList
        style={styles.flatList}
        data={issueDatas}
        renderItem={({item, index}) => {
          console.log("item", item)
          return ItemIssue(item, index)
        }}
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
