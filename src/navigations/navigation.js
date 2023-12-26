import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import KelimeListesi from "../screens/KelimeListe/kelimeListesi";
import KelimeKartiListe from "../screens/KelimeKarti/kelimeKartiListe";
import TestListe from "../screens/Test/TestListe/TestListe";
import EslestirmeTest from "../screens/Test/Testler/eslestirmeTest";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="KelimeListe" component={KelimeListesi} />
      {/* aşağıya KelimeKartiListesi componenti yazılacak */}
      <Stack.Screen name="KelimeKartiListe" component={KelimeKartiListe} />
    </Stack.Navigator>
  );
}
function TestStack() {
  return (
    <Stack.Navigator
      initialRouteName="Testler"
      screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}
    >
      <Stack.Screen name="Testler" component={TestListe} />
      <Stack.Screen name="EslestirmeTest" component={EslestirmeTest} />
    </Stack.Navigator>
  );
}
export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: Colors.element1,
          },
          headerShown: false,
          tabBarActiveTintColor: Colors.element2,
          tabBarInactiveTintColor: Colors.honeydew,
        }}
      >
        <Tab.Screen
          name="Anasayfa"
          component={HomeStack}
          options={{
            tabBarLabel: "Anasayfa",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Test"
          component={TestStack}
          options={{
            tabBarLabel: "Test",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="ab-testing"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tablo"
          component={KelimeKartiListe}
          options={{
            tabBarLabel: "Liderlik Tablosu",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard-list"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={HomeScreen}
          options={{
            tabBarLabel: "Profil",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// import HomeScreen from "../screens/Home/HomeScreen";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Colors } from "../constants/colors";
// import KelimeListesi from "../screens/KelimeListe/kelimeListesi";
// import KelimeKartiListe from "../screens/KelimeKarti/kelimeKartiListe";
// import TestListe from "../screens/Test/TestListe/TestListe";
// import EslestirmeTest from "../screens/Test/Testler/eslestirmeTest";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function HomeStack() {
//   return (
//     <Tab.Navigator
//     screenOptions={{
//       tabBarStyle: {
//         borderTopWidth: 0,
//         backgroundColor: Colors.element1,
//       },
//       headerShown: false,
//       tabBarActiveTintColor: Colors.element2,
//       tabBarInactiveTintColor: Colors.honeydew,
//     }}
//   >
//     <Tab.Screen
//       name="Anasayfa"
//       component={HomeScreen}
//       options={{
//         tabBarLabel: "Anasayfa",
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons name="home" color={color} size={size} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Test"
//       component={TestListe}
//       options={{
//         tabBarLabel: "Test",
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons
//             name="ab-testing"
//             color={color}
//             size={size}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Tablo"
//       component={KelimeKartiListe}
//       options={{
//         tabBarLabel: "Liderlik Tablosu",
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons
//             name="clipboard-list"
//             color={color}
//             size={size}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Profil"
//       component={HomeScreen}
//       options={{
//         tabBarLabel: "Profil",
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons
//             name="account"
//             color={color}
//             size={size}
//           />
//         ),
//       }}
//     />
//   </Tab.Navigator>
//   );
// }

// export default function BottomNavigation() {
//   return (
//     <NavigationContainer>
//         <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}
//     >
//       <Stack.Screen name="Home" component={HomeStack} />
//       <Stack.Screen name="KelimeListe" component={KelimeListesi} />
//       {/* aşağıya KelimeKartiListesi componenti yazılacak */}
//       <Stack.Screen name="KelimeKartiListe" component={KelimeKartiListe} />
//       <Stack.Screen name="EslestirmeTest" component={EslestirmeTest} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
