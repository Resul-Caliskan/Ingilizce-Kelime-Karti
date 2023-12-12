import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/navigations/navigation";

export default function App() {
  return <BottomNavigation />;
}
