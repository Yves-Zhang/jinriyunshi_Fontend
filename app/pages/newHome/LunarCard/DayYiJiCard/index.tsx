import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { Image, ImageBackground, StyleSheet } from "react-native";

const YiCard = (props: any) => {
  const { dayYi = [], dayJi = [] } = props;

  const createYi = (yi: string[]) => {
    if (yi.length === 0) {
      return <ThemedText>今日无宜</ThemedText>;
    }

    return yi.map((item: string, index: number) => {
      return (
        <ThemedView key={index} style={{ backgroundColor: "transparent" }}>
          <ThemedText key={index} style={styles.yiJi}>
            {item}
          </ThemedText>
        </ThemedView>
      );
    });
  };

  const createJi = (ji: string[]) => {
    if (ji.length === 0) {
      return <ThemedText>今日无忌</ThemedText>;
    }

    return ji.map((item: string, index: number) => {
      return (
        <ThemedView key={index} style={{ backgroundColor: "transparent" }}>
          <ThemedText key={index} style={styles.yiJi}>
            {item}
          </ThemedText>
        </ThemedView>
      );
    });
  };

  return (
    <ThemedView style={styles.yiCard}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>今日宜忌</ThemedText>
        <ThemedView style={styles.line} />
      </ThemedView>
      <ThemedView style={styles.content}>
        <Image
          source={require("../../../../../assets/images/yi.png")}
          style={styles.icon}
        />
        <ThemedText style={styles.text}>{createYi(dayYi)}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.separator}>
        <ImageBackground
          source={require("../../../../../assets/images/line_dashed.png")}
          style={styles.image}
        ></ImageBackground>
      </ThemedView>
      <ThemedView style={[styles.content, { marginTop: 10 }]}>
        <Image
          source={require("../../../../../assets/images/ji.png")}
          style={styles.icon}
        />
        <ThemedText style={styles.text}>{createJi(dayJi)}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  yiCard: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fffdf6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.5,
    elevation: 2,
  },
  titleContainer: {
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 18,
    color: "#838383",
    fontWeight: "400",
  },
  line: {
    height: 1,
    backgroundColor: "#f8f9f4",
    marginTop: 5,
  },
  content: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "transparent",
  },
  icon: {
    width: 26,
    height: 26,
    marginLeft: 15,
    marginRight: 15,
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderStyle: "dashed",
  },
  image: {
    width: "100%",
    height: 1,
    opacity: 0.3,
  },
  yiJi: {
    fontSize: 18,
    color: "black",
    marginBottom: 5,
    marginRight: 10,
    lineHeight: 24,
    backgroundColor: "transparent",
    fontWeight: 500,
    opacity: 0.7,
  }
});

export default YiCard;
