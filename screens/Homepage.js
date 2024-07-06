import { ScrollView } from "react-native";
import HomeMainCarousel from "../components/HomeMainCarousel";
import TabContent from "../components/TabContent";
import Donate from "../components/Donate";

export default function Homepage() {

  return (
    <ScrollView>
      <HomeMainCarousel />
      <TabContent
        buttons={["About Us", "Our Mission", "Our Vision"]}
      />
      <Donate />
    </ScrollView>
  );
}
