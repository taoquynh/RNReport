import { StyleSheet } from "react-native";
import {MAIN_COLOR} from "../constants";

const styles = StyleSheet.create({
  centerColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    fontSize: 17,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginVertical: 15,
  },

  logo: {
    width: "40%",
    resizeMode: "contain",
  },

  mainButton: {
    backgroundColor: MAIN_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  }, 

  titleButton: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "600",
  },

  normalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  empty20: {
    width: '100%',
    minHeight: '20%'
  }
});

export default styles;
