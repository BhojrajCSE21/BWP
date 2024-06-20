import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function DetailCarousel() {
  const screenWidth = Dimensions.get("window").width;

  const [activeIndex, setActiveIndex] = useState(0);

  const carouselData = [
    {
      id: "01",
      image: require("../assets/image-1.png"),
    },
    {
      id: "02",
      image: require("../assets/image-2.png"),
    },
    {
      id: "03",
      image: require("../assets/icon.png"),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <Image
          source={item.image}
          style={{ height: 200, width: screenWidth }}
        />
      </View>
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(Math.round(index));
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex === index) {
        return <View key={index} style={styles.activeDot}></View>;
      } else {
        return <View key={index} style={styles.dotContainer}></View>;
      }
    });
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => {
          item.id;
        }}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.dotView}>{renderDotIndicators()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    backgroundColor: "#A5A5D4",
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#000080",
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
