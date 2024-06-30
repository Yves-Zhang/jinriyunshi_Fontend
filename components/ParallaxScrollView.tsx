import type { PropsWithChildren, ReactElement } from "react";
import { ImageBackground, StyleSheet, useColorScheme } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  headerBackgroundColor?: { dark: string; light: string };
  showHeader?: boolean;
  backgroundColor?: string;
  backgroundImage?: any;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  showHeader = true,
  backgroundColor,
  backgroundImage,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      {!!backgroundImage && (
        <ImageBackground source={backgroundImage} style={styles.bg_page}>
          <Animated.ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {showHeader && (
              <Animated.View
                style={[
                  styles.header,
                  {
                    backgroundColor: headerBackgroundColor
                      ? headerBackgroundColor[colorScheme]
                      : undefined,
                  },
                  headerAnimatedStyle,
                ]}
              >
                {headerImage}
              </Animated.View>
            )}
            <ThemedView style={styles.content}>{children}</ThemedView>
          </Animated.ScrollView>
        </ImageBackground>
      )}
      {!backgroundImage && (
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {showHeader && (
            <Animated.View
              style={[
                styles.header,
                {
                  backgroundColor: headerBackgroundColor
                    ? headerBackgroundColor[colorScheme]
                    : undefined,
                },
                headerAnimatedStyle,
              ]}
            >
              {headerImage}
            </Animated.View>
          )}
          <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  bg_page: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    gap: 16,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});
