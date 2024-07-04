import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { setLunarInfo } from "@/store/reducers/lunarReducer";
import { getLunarDayInfo } from "@/utils/lunarTool";
import { Card } from "@ui-kitten/components";
import { useEffect, useMemo } from "react";
import { StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const LunarCard = () => {
  const dispatch = useDispatch();
  const lunarInfo = useSelector((state: any) => state.lunarStore.lunarInfo);

  const shichenData = useMemo(() => {
    if (!lunarInfo) {
      return {};
    }
    return {
      indexTimeYi: lunarInfo.indexTimeYi,
      indexTimeJi: lunarInfo.indexTimeJi,
      shichens: lunarInfo.shichens,
    };
  }
    , [lunarInfo]);

  const data = useMemo(() => {
    return lunarInfo;
  }
    , [lunarInfo]);



  const getLunarInfo = () => {
    const data = getLunarDayInfo(new Date());
    dispatch(setLunarInfo(data))
  };

  useEffect(() => {
    getLunarInfo();
  }, []);
  
  return (
    <Card style={styles.card} status='basic'>
                <ThemedView style={[styles.dataContainer, styles.dataChinese]}>
            <Image
              source={require("@/assets/images/nongli.png")}
              style={styles.imageNongli}
            />
            <ThemedText style={styles.textContent}>
              {data.monthChinese}月{data.dayChinese}
            </ThemedText>
          </ThemedView>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
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
  imageNongli: {
    width: 20,
    height: 40,
  },
});

export default LunarCard;