import React, { FC } from "react";
import { Header, Icon } from "react-native-elements";
import { MAIN_COLOR } from "../constants";
import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface HeaderProps {
  navigation: StackNavigationProp<ParamListBase, 'Issue'>
  isMain: boolean,
  title: string,
}

const MainHeader: FC<HeaderProps> = ({ navigation, isMain, title }) => {
  if (isMain) {
    return (
      <Header
        containerStyle={{
          backgroundColor: MAIN_COLOR,
        }}
        leftComponent={
          <Icon name="menu" color="#fff" size={32} onPress={() => { navigation.openDrawer()}} />
        }
        centerComponent={{
          text: title,
          style: { color: "#fff", fontSize: 24 },
        }}
      />
    );
  } else {
    return (
      <Header
        containerStyle={{
          borderBottomWidth: 0,
        }}
        leftComponent={
          <Icon
            name="keyboard-arrow-left"
            color="#fff"
            size={40}
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
        centerComponent={{ text: title, style: { color: "#fff" } }}
      />
    );
  }
};

export default MainHeader;
