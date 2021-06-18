import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MAIN_COLOR } from "../constants";
import { returnUrlImage } from "../manager-apis/APIName";
import { Issue } from "../models/Issue";

// const images = [
//   { id: 1, source: require("../../assets/anh1.jpeg") },
//   { id: 1, source: require("../../assets/anh2.jpeg") },
//   { id: 1, source: require("../../assets/anh3.jpeg") },
//   { id: 1, source: require("../../assets/anh4.jpeg") },
// ];
const WIDTH = Dimensions.get("window").width - 40;
const numCol = 2;
const WIDTH_LIST = WIDTH - 40;

interface Status {
  text: string;
  color: string;
}

const statuses = [
  {
    text: "Đang chờ",
    color: "orange",
  },
  {
    text: "Đang xử lý",
    color: "orange",
  },
  {
    text: "Đã xong",
    color: "green",
  },
  {
    text: "Huỷ bỏ",
    color: "gray",
  },
  {
    text: "Không duyệt",
    color: "red",
  },
];

const ItemIssue = (item: Issue, index: number) => {
  const user = item.accountPublic;
  const images = item.photos;
  // const [status, setStatus] = useState<Status>();

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={[styles.chiaDoi, styles.topLeft]}>
          <Image
            style={styles.photo}
            // source={require("../../assets/pikachu.jpg")}
            source={
              user.avatar === null
                ? require("../../assets/pikachu.jpg")
                : { uri: returnUrlImage(user.avatar) }
            }
          />
          <View>
            <Text>{user.name}</Text>
            <Text>20/09/2020</Text>
          </View>
        </View>
        <View style={[styles.chiaDoi, styles.topRight]}>
          <Text style={[styles.statusLabel, { color: statuses[item.status].color}]}>
            {statuses[item.status].text}
            {/* Đang chờ */}
          </Text>
        </View>
      </View>
      <View style={styles.lineView}></View>
      <View style={styles.bottomView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.content}</Text>
        {images.length > 0 ? (
          <FlatList
            data={images}
            keyExtractor={(item, index) => `${index}`}
            numColumns={images.length === 1 ? 1 : 2}
            style={styles.listImages}
            renderItem={({ item, index }) => (
              <Image
                style={{
                  width: WIDTH_LIST / (images.length === 1 ? 1 : 2),
                  height: images.length === 1 ? 200 : 100,
                  backgroundColor: "red",
                  margin: 2,
                }}
                // source={item.source}
                source={{ uri: returnUrlImage(item) }}
                // source={require("../../assets/pikachu.jpg")}
                resizeMode="cover"
              />
            )}
          />
        ) : (
          <EmptyList></EmptyList>
        )}
      </View>
    </View>
  );
};

const EmptyList = () => {
  return <View></View>;
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
    marginBottom: 8,
  },
  statusLabel: {
    // color: "gray",
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
  listImages: {
    marginTop: 10,
  },
});

export default ItemIssue;
