import { ThemedView } from "@/components/ThemedView";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import DateComponent from "./DateComponent";
import { getLunar } from "@/api/lunar.ts";
import React, { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import YiCard from "./DayYiJiCard";
import ShichenYiCard from "./ShichenYiJiCard";

const Home = () => {
  const [data, setData] = useState({} as any);
  const [shichenData, setShichenData] = useState({} as any);

  const getLunarInfo = async (date: Date) => {
    const ret = await getLunar();
    const { data } = ret;
    setData(data);
    setShichenData({
      indexTimeYi: data.indexTimeYi,
      indexTimeJi: data.indexTimeJi,
      shichens: data.shichens,
    });
    console.log(ret.data);
  };

  useEffect(() => {
    getLunarInfo(new Date());
  }, []);

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ImageBackground
          source={require("../../../assets/images/bg.png")}
          style={styles.image}
        >
          <ThemedView style={[styles.dataContainer, { marginTop: 40 }]}>
            <DateComponent style={styles.dateContent} />
          </ThemedView>
          <ThemedView style={[styles.dataContainer, styles.dataChinese]}>
            <Image
              source={require("../../../assets/images/nongli.png")}
              style={styles.imageNongli}
            />
            <ThemedText style={styles.textContent}>
              {data.monthChinese}月{data.dayChinese}
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.dataContainer}>
            <ThemedText style={styles.ganzhiContent}>
              {data.yearGanZhi}年 {data.monthGanZhi}月 {data.dayGanZhi}日
            </ThemedText>
          </ThemedView>
        </ImageBackground>
      </ThemedView>
      {data.dayYi && data.dayJi && (
        <ThemedView style={styles.cardContainer}>
          <YiCard dayYi={data.dayYi} dayJi={data.dayJi}></YiCard>
        </ThemedView>
      )}
      {data.dayYi && data.dayJi && (
        <ThemedView style={styles.cardContainer}>
          <ShichenYiCard
            shichenData={shichenData}
          ></ShichenYiCard>
        </ThemedView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  titleContainer: {
    gap: 8,
    height: 200,
    // backgroundColor: "rgba(255, 255, 255, 0)",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // 继承父级背景色
    backgroundColor: "inherit",
  },
  dateContent: {
    marginTop: 10,
  },
  textContent: {
    // 继承父级背景色
    backgroundColor: "inherit",
    flexDirection: "row",
    alignContent: "center",
    fontSize: 36,
    color: "#c85e5e",
    lineHeight: 45,
    marginLeft: 15,
    fontFamily: "Kaiti SC",
  },
  ganzhiContent: {
    // 继承父级背景色
    backgroundColor: "inherit",
    flexDirection: "row",
    alignContent: "center",
    color: "#5c5c5c",
    fontSize: 18,
    marginTop: 2,
  },
  imageNongli: {
    width: 20,
    height: 40,
  },
  dataChinese: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  cardContainer: {
    padding: 10,
    // 透明色
    backgroundColor: "transparent",
  },
});

export default Home;
