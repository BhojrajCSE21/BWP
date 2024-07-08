import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import VerificationScreen from "../screens/VerificationScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CertificateScreen from "../screens/CertificateScreen";
import AadhaarScreen from "../screens/AadhaarScreen";
import Homepage from "../screens/Homepage";
import AppBar from "../components/AppBar";
import DetailCarousel from "../components/DetailCarousel";
import Donation from "../screens/Donation";
import ContactScreen from "../screens/ContactScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Verify" component={VerificationScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Certificate" component={CertificateScreen} />
      <Stack.Screen name="Aadhaar" component={AadhaarScreen} />
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{
          header: () => <AppBar />, 
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Agenda"
        component={DetailCarousel}
        options={{
          header: () => <AppBar />, 
        }}
      />
      <Drawer.Screen
        name="Donation"
        component={Donation}
        options={{
          header: () => <AppBar />, 
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactScreen}
        options={{
          header: () => <AppBar />, 
        }}
      />
    </Drawer.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <>
      <DrawerNavigator />
    </>
  );
};

export default AppNavigator;
