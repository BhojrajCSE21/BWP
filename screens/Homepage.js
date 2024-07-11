import { ScrollView } from "react-native";
import HomeMainCarousel from "../components/HomeMainCarousel";
import TabContent from "../components/TabContent";
import Testimonial from "../components/Testimonial";

export default function Homepage() {

  return (
    <ScrollView>
      <HomeMainCarousel />
      <TabContent
        buttons={["About Us", "Our Mission", "Our Vision"]}
      />
      <Testimonial />
    </ScrollView>
  );
}
