import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { Image, Text, View } from "react-native";

const tabData = [
  {
    id: "0",
    image: require("../assets/tabImage.png"),
    title: "BWP",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry's standard ",
  },
  {
    id: "1",
    image: require("../assets/tabImage.png"),
    title: "Our Mission",
    body: "Our mission is to “make giving bigger and better”. We are the most trusted giving platform in India. Through our technology solutions and services, we enable individuals and organizations to raise funds for, and donate to any cause they care about, with trust and convenience.",
  },
  {
    id: "2",
    image: require("../assets/tabImage.png"),
    title: "Our Vision",
    body: "Our vision is to alleviate poverty by enabling the world to give. We are committed to working together with unconditional respect, freedom, trust and support for each other.",
  },
];

export default function TabContent({ buttons }) {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (item, id) => {
    setClickedId(id);
  };

  return (
    <SafeAreaView>
        <View style={styles.buttonContainer}>
          {buttons.map((buttonLabel, index) => {
            return (
              <TouchableOpacity
                onPress={(item) => handleClick(item, index)}
                key={index}
                style={[
                  index === clickedId
                    ? styles.buttonActive
                    : styles.buttonStyle,
                  index === 0
                    ? { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
                    : "",
                    index === 1
                    ? { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
                    : "",
                  index === 2
                    ? { borderTopRightRadius: 10, borderTopLeftRadius: 10 }
                    : "",
                ]}
              >
                <Text
                  style={
                    index === clickedId
                      ? styles.buttonTextActive
                      : styles.buttonText
                  }
                >
                  {buttonLabel}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.imageContainer}>
          <Image source={tabData[clickedId].image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{tabData[clickedId].title}</Text>
            <Text style={styles.body}>{tabData[clickedId].body}</Text>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 14,
    padding : 8,
  },
  buttonStyle: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2.4,
    borderBottomColor: '#2B29A6'
  },
  buttonActive: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B29A6",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "700",
  },
  buttonTextActive: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  imageContainer: {
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 0.4,
    borderColor: "#52505095",
    marginHorizontal: 18,
    marginTop: 14,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 2.4,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: "#444",
    textAlign: "justify"
  },
});
