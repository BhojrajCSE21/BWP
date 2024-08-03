import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Agenda() {
  
  const flatlistRef= useRef();

  const screenWidth = Dimensions.get("window").width;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length-1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,        
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,        
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

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
    <ScrollView>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
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
      <View style={styles.textLayout}>
        <Text style={styles.agendatitle}>Help for better Education</Text>
        <Text style={styles.agendaText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</Text>
      </View>
    </ScrollView>
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
  textLayout: {
    margin: 24
  },
  agendatitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4
  },
  agendaText: {
    fontSize: 14,
    fontWeight: "medium",
    textAlign: "justify"
  }
});
