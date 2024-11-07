import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/pages/HomeScreen";
import DetailsScreen from "./src/pages/DetailsScreen";
import ProfileScreen from "./src/pages/ProfileScreen";
import SettingsScreen from "./src/pages/SettingsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Função de navegação para Home sem o Drawer
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

// Drawer para a navegação da tela Profile
function ProfileDrawer() {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerTitle: "" }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerTitle: "Configurações",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}


function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: "Home", headerShown: false }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileDrawer}
        options={{ title: "Profile", headerShown: false }}
      />
    </Tab.Navigator>
  );
}

// Componente principal do App
export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}
