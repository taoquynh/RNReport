import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MAIN_COLOR } from "../constants";

const images = [
  { id: 1, source: require("../../assets/anh1.jpeg") },
  { id: 1, source: require("../../assets/anh2.jpeg") },
  { id: 1, source: require("../../assets/anh3.jpeg") },
  { id: 1, source: require("../../assets/anh4.jpeg") },
];
const WIDTH = Dimensions.get("window").width - 40;
const numCol = 2;
const WIDTH_LIST = WIDTH - 40;

const ItemIssue = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={[styles.chiaDoi, styles.topLeft]}>
          <Image
            style={styles.photo}
            source={require("../../assets/pikachu.jpg")}
          />
          <View>
            <Text>Hieu Tao</Text>
            <Text>20/09/2020</Text>
          </View>
        </View>
        <View style={[styles.chiaDoi, styles.topRight]}>
          <Text style={styles.statusLabel}>Không duyệt</Text>
        </View>
      </View>
      <View style={styles.lineView}></View>
      <View style={styles.bottomView}>
        <Text>Hầm B2 bị ngập nước</Text>
        <Text>
          Tôi gửi xe ô tô tại hầm chung cư và có ký hợp đồng với ban quản lý
          chung cư. Do mưa lớn, nước mưa tràn vào hầm khiến xe của tôi bị ngập
          và hư hỏng nặng. Trong trường hợp này tôi có được bồi thường không?
        </Text>
        <FlatList
          data={images}
          keyExtractor={(item, index) => `${index}`}
          numColumns={numCol}
          renderItem={({ item, index }) => (
            <Image
              style={{
                // borderRadius: 10,
                width: WIDTH_LIST / numCol,
                height:
                  (Image.resolveAssetSource(item.source).height * (WIDTH_LIST / numCol)) / Image.resolveAssetSource(item.source).width,
                backgroundColor: "white",
                margin: 2,
              }}
              source={item.source}
              resizeMode="cover"
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // maxHeight: 600,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginBottom: 20,
    borderRadius: 10,
  },
  topView: {
    width: "100%",
    height: 50,
    flexDirection: "row",
  },
  lineView: {
    width: "100%",
    height: 0.5,
    backgroundColor: "gray",
    marginVertical: 10,
  },
  bottomView: {
    width: "100%",
  },
  photo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
    borderRadius: 25,
    borderColor: MAIN_COLOR,
    borderWidth: 1,
  },
  title: {
    fontWeight: "bold",
  },
  statusLabel: {
    color: "red",
  },
  chiaDoi: {
    width: "50%",
    height: "100%",
  },
  topLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topRight: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
});

export default ItemIssue;
