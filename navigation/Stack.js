import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import Home from "../components/Home";
import Load from "../components/Load";
import { IconSunOn } from "../components/nativePaper";
import { Icon } from "react-native-paper";


const Stack = () => {
  const Stack = createNativeStackNavigator();

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

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Bienvenido",
            gestureEnabled: true,
            gestureDirection: "horizontal",
            headerBackVisible: false,
            headerRight: () => (
             <IconSunOn/>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
