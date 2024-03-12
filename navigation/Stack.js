import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import Load from "../components/Load";
import Texts from "../components/Texts";
import Questions from "../screens/Questions";
import Ministry from '../screens/Ministry';
import WatchTower from '../screens/WatchTower';
import { IconHeart, IconWatchTower, IconHome } from '../components/NativePaper';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerContainer}>
      <DrawerItemList {...props} />
      <DrawerItem label=" " onPress={() => props.navigation.navigate("Ministry")} icon={() => (
        <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
          <Text style={{ marginRight: 0, fontSize: 20, marginLeft: 10 }}>Ministerio</Text>
          <IconHeart />
        </View>
      )} />
      <DrawerItem label=" " onPress={() => props.navigation.navigate("WatchTower")} icon={() => (
        <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
          <Text style={{ marginRight: 5, fontSize: 20, marginLeft: 10 }}>Atalaya</Text>
          <IconWatchTower />
        </View>
      )} />
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} >
      <Drawer.Screen 
        name=" " 
         component={Home}
         options={{ 
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
              <Text style={{fontSize: 20, marginLeft: 10}}>Inicio</Text>
              <IconHome name="home" color={color} size={size} />
            </View>
          )
        }}  
      />
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#800080',
        },
        tabBarLabelStyle: {
          fontFamily: "merri",
          fontSize: 14,
          color: 'white',
        },
      }}
    >
      <Tab.Screen 
        name="Home"
        component={MyDrawer}
        options={{
          headerShown: false,
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
          headerShown: false,
          tabBarLabel: 'Texts',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant-outline" color='white' size={30} />
          ),       
        }}
      />
    </Tab.Navigator>
  );
}

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Load">
        <Stack.Screen name="Load" component={Load} options={{ title: "Load", headerShown: false }} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Questions" component={Questions} options={{ title: "Questions",headerShown: false }} />
        <Stack.Screen name="WatchTower" component={WatchTower} options={{ title: "WatchTower", headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="Ministry" component={Ministry} options={{ title: "Ministry", headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});

export default Stacks;
