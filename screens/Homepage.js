import { ScrollView } from "react-native";
import HomeMainCarousel from "../components/HomeMainCarousel";
import TabContent from "../components/TabContent";
import Donate from "../components/Donate";
import VerificationScreen from "./VerificationScreen";

export default function Homepage() {

  return (
    <ScrollView>
      <HomeMainCarousel />
      <TabContent
        buttons={["About Us", "Our Mission", "Our Vision"]}
      />
      {/* <Donate /> */}
      {/* <VerificationScreen /> */}
    </ScrollView>
  );
}
