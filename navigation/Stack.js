import 'react-native-gesture-handler';
import React, {useEffect, useState} from "react";
import { Text,View,StyleSheet } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import Home from "../components/Home";
import Load from "../components/Load";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Texts from "../components/Texts";
import Questions from "../screens/Questions";
import WatchTower from '../screens/WatchTower';
import { IconHeart,IconWatchTower,IconHome } from '../components/NativePaper';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer  = createDrawerNavigator()


function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }
  return (
    <View style={styles.drawerContainer}>
      <View>
        <DrawerItemList {...props} />
          <View style={styles.containerMinistry}>
            <DrawerItem label="" onPress={() => alert('Link to help')}
             icon={() => (
              <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                <Text style={{ marginRight: 0, fontSize: 20, marginLeft: 10 }}>Ministerio</Text>
                <IconHeart/>
              </View>
            )}
            
          />
          </View>
          <DrawerItem label="" onPress={() => {navigation.navigate("WatchTower"), closeDrawer()}}
            icon={() => (
              <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                <Text style={{ marginRight: 5, fontSize: 20, marginLeft: 10 }}>Atalaya</Text>
                <IconWatchTower/>
              </View>
            )}
          />
        </View>
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name=" " component={Home} 
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
      headerShown: false,
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
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{
            title: "Questions",
            gestureEnabled: true,
            gestureDirection: "horizontal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WatchTower"
          component={WatchTower}
          options={{
            title: "Questions",
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

const styles = StyleSheet.create({
  drawerContainer:  {
   flex: 1,
   paddingTop: 60,
    paddingHorizontal: 20,
  },

  card:{
    maxWidth: 100,
    maxHeight: 30
  },

  containerMinistry: {
    
  }
})

export  default Stacks;
