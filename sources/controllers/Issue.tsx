import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, {FC} from "react";
import { StyleSheet, View } from "react-native";
import MainHeader from "../components/MainHeader";


interface IssueProps {
  navigation: StackNavigationProp<ParamListBase, 'Issue'>
}
const Issue: FC<IssueProps> = ({navigation}) => {
  return <View style={styles.container}>
    <MainHeader navigation={navigation} title='Issue' isMain={true}></MainHeader>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


export default Issue;
