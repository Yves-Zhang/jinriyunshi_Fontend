import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useMemo } from "react";

import { Image, ImageBackground, StyleSheet } from "react-native";

const YiCard = (props: any) => {
  const { shichenData = {} } = props;

  const indexYi = useMemo(() => {
    return shichenData.indexTimeYi || [];
  }, [shichenData.indexTimeYi]);

  const indexJi = useMemo(() => {
    return shichenData.indexTimeJi || [];
  }, [shichenData.indexTimeJi]);

  const shichens = useMemo(() => {
    return shichenData.shichens || [];
  }, [shichenData.shichens]);

  const createYi = (yi: string[]) => {
    if (yi.length === 0) {
      return <ThemedText>无</ThemedText>;
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
      return <ThemedText>无</ThemedText>;
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

  const createShichen = (shichens: any[]) => {
    return shichens.map((item: any, index: number) => {
      return (
        <ThemedView key={index} style={styles.word}>
          {item.ganZhi?.split("").map((item: string, index: number) => {
            return (
              <ThemedText key={index} style={styles.shichenText}>
                {item}
              </ThemedText>
            );
          })}
        </ThemedView>
      );
    });
  };

  return (
    <ThemedView style={styles.yiCard}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>时辰宜忌</ThemedText>
        <ThemedView style={styles.line} />
      </ThemedView>
      <ThemedView style={styles.content}>
        <Image
          source={require("../../../../assets/images/yi.png")}
          style={styles.icon}
        />
        <ThemedText style={styles.text}>{createYi(indexYi)}</ThemedText>
      </ThemedView>
      {/* <ThemedView style={styles.separator}>
        <ImageBackground
          source={require("../../../../assets/images/line_dashed.png")}
          style={styles.image}
        ></ImageBackground>
      </ThemedView> */}
      <ThemedView style={[styles.content]}>
        <Image
          source={require("../../../../assets/images/ji.png")}
          style={styles.icon}
        />
        <ThemedText style={styles.text}>{createJi(indexJi)}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.lineBottom} />
      <ThemedView style={styles.container}>
        {createShichen(shichens)}
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
  lineBottom: {
    height: 1,
    backgroundColor: "#d4a885",
    marginTop: 5,
    opacity: 0.3,
  },
  content: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginTop: 10,
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 10,
    marginRight: 10,
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
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 10,
  },
  word: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    // margin: 5,
  },
  shichenText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    opacity: 0.5,
  },
});

export default YiCard;
