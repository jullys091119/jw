import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import Load from "../components/Load";

const Stack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Load"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Load"
          component={Load}
          options={{
            title: "Load",
            gestureEnabled: true,
            gestureDirection: "horizontal",
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            gestureEnabled: true,
            gestureDirection: "horizontal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
