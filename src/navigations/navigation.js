import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import KelimeListesi from "../screens/KelimeListe/kelimeListe";

const Tab = createBottomTabNavigator();

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
          tabBarInactiveTintColor:Colors.white
        }}
      >
        <Tab.Screen
          name="Anasayfa"
          component={HomeScreen}
          options={{
            tabBarLabel: "Anasayfa",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Test"
          component={KelimeListesi}
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
          component={HomeScreen}
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
