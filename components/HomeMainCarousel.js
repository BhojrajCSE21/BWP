import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import data from "../data";
import { useEffect, useRef, useState } from "react";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
} from "react-native-reanimated";

const INTERVAL = 3000;

export default function HomeMainCarousel() {
  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);
  const { width } = useWindowDimensions();
  const SIZE = width * 0.9;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const scrollViewRef = useRef(null);
  const numItems = 3;

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const nextIndex = Math.floor(x.value / SIZE) + 1;
      const nextX = nextIndex * SIZE;

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: nextX >= numItems * SIZE ? 0 : nextX,
          animated: true,
        });
      }

      x.value = withTiming(nextX >= numItems * SIZE ? 0 : nextX);
    }, INTERVAL);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate="fast"
      onScroll={onScroll}
    >
      {newData.map((item, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          const scale = interpolate(
            x.value,
            [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
            [0.8, 1, 0.8]
          );
          return {
            transform: [{ scale }],
          };
        });
        if (!item.imgUrl) {
          return <View style={{ width: SPACER }} key={index} />;
        }
        return (
          <Animated.View key={index} style={{ width: SIZE }}>
            <Animated.View style={[styles.imageContainer, animatedStyle]}>
              <Image source={item.imgUrl} style={styles.image} />
            </Animated.View>
          </Animated.View>
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.8,
  },
});
