import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
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

export default function Card() {
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
  const numItems = data.length;

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
    <>
      <View>
        <View style={styles.agendaHeadingContainer}>
          <Text style={styles.agendaText}>Our Agenda</Text>
        </View>
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
                  <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                  </View>
                </Animated.View>
              </Animated.View>
            );
          })}
        </Animated.ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  agendaHeadingContainer: {
    flexDirection: "row",
  },
  agendaText: {
    color: "#303030",
    fontWeight: "bold",
    fontSize: 20,
    margin: 24,
  },
  imageContainer: {
    borderRadius: 34,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.8,
  },
  containerT: {
    borderBottomColor: "red",
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#444',
  },
});
