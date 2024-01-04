import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import Gruplar from "../screens/KelimeListe/Gruplar";
import TestListe from "../screens/Test/TestListe/TestListe";
import EslestirmeTest from "../screens/Test/Testler/eslestirmeTest";
import KelimeKartlari from "../screens/KelimeKarti/KelimeKartlari";
import DinlemeTest from "../screens/Test/Testler/dinlemeTest";
import YazmaTest from "../screens/Test/Testler/yazmaTesti";
import LoginScreen from "../screens/Login/login";
import AdminLoginScreen from "../screens/Login/adminLogin";
import AdminPanel from "../screens/Login/adminPanel";
import RegisterScreen from "../screens/Login/register";
import LeaderboardScreen from "../screens/LeaderBoard/board";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack({ route }) {
  const email = route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: Colors.element1,
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.honeydew,
        tabBarInactiveTintColor: Colors.anaEkranYazi,
        tabBarLabelStyle: {
          fontSize: 12, // Yazı boyutunu ayarla
          fontWeight: "700",
          flexWrap: "wrap",
        },
      }}
    >
      <Tab.Screen
        name="Anasayfa"
        component={HomeScreen}
        initialParams={email}
        options={{
          tabBarLabel: "Anasayfa",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestListe}
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
        component={LeaderboardScreen}
        initialParams={email}
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
      {/* <Tab.Screen
        name="Profil"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}
      >
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
          <Stack.Screen name="AdminPanel" component={AdminPanel} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeStack} />
          <Stack.Screen name="Gruplar" component={Gruplar} />
          <Stack.Screen name="KelimeKartiListe" component={KelimeKartlari} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="Testler" component={TestListe} />
          <Stack.Screen name="Eslestirme" component={EslestirmeTest} />
          <Stack.Screen name="Dinleme" component={DinlemeTest} />
          <Stack.Screen name="Yazma" component={YazmaTest} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
