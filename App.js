import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/navigations/navigation";
import { registerBackgroundTask } from "./src/backEnd/functions/backGroundFetch";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    registerBackgroundTask();
  }, []);
  return <BottomNavigation />;
}
