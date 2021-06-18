import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {MAIN_COLOR} from "../constants";
import layouts from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/routers";

interface RegisterProps {
  navigation: StackNavigationProp<ParamListBase, 'Register'>
}

const RegisterScreen: React.FC<RegisterProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={32} color={MAIN_COLOR} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Image style={layouts.logo} source={require("../../assets/logo.png")} />
        <View style={styles.inputView}>
          <View>
            <Text style={styles.label}>Họ & tên</Text>
            <TextInput style={layouts.textInput} selectionColor={MAIN_COLOR} />
          </View>
          <View>
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput
              style={layouts.textInput}
              keyboardType="number-pad"
              selectionColor={MAIN_COLOR}
            />
          </View>
          <View>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput
              style={layouts.textInput}
              secureTextEntry
              selectionColor={MAIN_COLOR}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={[layouts.mainButton]}>
            <Text style={[layouts.titleButton, { color: "#fff" }]}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={layouts.empty20}></View>
      <Text style={styles.bottomText}>
        HotLine: <Text style={styles.phoneText}>1800.1186</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    ...layouts.centerColumn,
    padding: 50,
  },
  icon: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  inputView: {
    width: "100%",
    marginVertical: 30,
  },
  label: {
    fontSize: 14,
    position: "absolute",
    fontWeight: '600',
    top: 7,
    left: 5,
    backgroundColor: "rgb(243, 242, 242)",
    zIndex: 10,
    paddingHorizontal: 5,
    color: "gray",
  },
  buttonView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  phoneText: {
    color: MAIN_COLOR,
  },
  bottomText: {
    marginVertical: 30,
    textAlign: "center",
  },
});

export default RegisterScreen;
