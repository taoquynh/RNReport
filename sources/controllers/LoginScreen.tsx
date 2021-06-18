import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MAIN_COLOR } from "../constants";
import layouts from "./styles";

import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/routers";
import { useDispatch } from "react-redux";
import { loginAction } from "../reduxs/actions";

interface LoginProps {
  navigation: StackNavigationProp<ParamListBase, "Login">;
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = React.useState("0168326697");
  const [password, setPassword] = React.useState("123456");

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image style={layouts.logo} source={require("../../assets/logo.png")} />
        <View style={styles.inputView}>
          <View>
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput
              style={layouts.textInput}
              keyboardType="number-pad"
              selectionColor={MAIN_COLOR}
              placeholder="Nhập ..."
              value="0168326697"
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          <View>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput
              style={layouts.textInput}
              secureTextEntry
              selectionColor={MAIN_COLOR}
              placeholder="Nhập ..."
              value="123456"
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[layouts.normalButton]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={[layouts.titleButton, { color: "#000" }]}>
              Đăng ký
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[layouts.mainButton]}
            onPress={() => {
              dispatch(loginAction(phone, password));
            }}
          >
            <Text style={[layouts.titleButton, { color: "#fff" }]}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={layouts.empty20}></View>
      <Text>
        HotLine: <Text style={styles.phoneText}>1800.1186</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 50,
  },
  topView: {
    flex: 1,
    width: "100%",
    height: "100%",
    ...layouts.centerColumn,
  },
  inputView: {
    width: "100%",
    marginVertical: 30,
  },
  buttonView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  phoneText: {
    color: MAIN_COLOR,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    position: "absolute",
    top: 7,
    left: 5,
    backgroundColor: "rgb(243, 242, 242)",
    zIndex: 10,
    paddingHorizontal: 5,
    color: "gray",
  },
});

export default LoginScreen;
