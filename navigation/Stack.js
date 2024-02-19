import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/Home";
import Load from "../components/Load";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Texts from "../components/Texts";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#800080', // Color de fondo de la barra de navegación
        },
        tabBarLabelStyle: {
          fontFamily:"merri",
          fontSize: 14,
          color: 'white', // Cambia este color al que desees
        },
      }}
    >
      <Tab.Screen 
       name="Home"
       component={Home}
       options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color='white' size={30} />
        ),
        headerShown: false,
        headerTintColor: "#fff",       
      }}
    />
     <Tab.Screen 
       name="Texts"
       component={Texts}
       options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book-open-page-variant-outline" color='white' size={30} />
        ),       
      }}
      />
    </Tab.Navigator>
  );
}

const Stacks = () => {
  MyTabs()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Load"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#800080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Load"
          component={Load}
          options={{
            title: "Load",
            gestureEnabled: true,
            gestureDirection: "horizontal",
            headerShown: false,
          }}
        />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export  default Stacks;
