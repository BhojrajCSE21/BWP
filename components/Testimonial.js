import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
} from "react-native";

const testimonialData = [
  {
    id: "0",
    image: require("../assets/t1.png"),
    title: "Jimmy Jonas",
  },
  {
    id: "1",
    image: require("../assets/t2.png"),
    title: "John Thomas",
  },
  {
    id: "2",
    image: require("../assets/t1.png"),
    title: "Jimmy Jonas",
  },
  {
    id: "3",
    image: require("../assets/t2.png"),
    title: "John Thomas",
  },
];

export default function Testimonial() {
  const { width: viewportWidth } = Dimensions.get("window");
  const flatListRef = useRef(null);
  const scrollInterval = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    scrollInterval.current = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % testimonialData.length;
      flatListRef.current.scrollToOffset({
        offset: currentIndex.current * (viewportWidth * 1.8 + 56),
        animated: true,
      });
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  };

  const onScrollBeginDrag = () => {
    stopAutoScroll();
  };

  const onScrollEndDrag = () => {
    startAutoScroll();
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.testimonialText}>Think Tank</Text>
      </View>
      <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={testimonialData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        contentContainerStyle={{ paddingHorizontal: 18 }}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24
  },
  flatList: {
    flexGrow: 0,
  },
  testimonialText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 24,
    marginLeft: 24
  },
  imageContainer: {
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 0.4,
    borderColor: "#52505095",
    marginHorizontal: 18,
    marginTop: 14,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120, 
    height: 120, 
    borderRadius: 60, 
  },
  content: {
    paddingTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
