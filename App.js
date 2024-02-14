import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Load from './components/Load';
import Home from'./components/Home';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Load'>
       <Stack.Screen
          name="Load"
          component={Load}
          options={{
            title: 'Load',
            gestureEnabled: true, // Habilita la navegación mediante gestos
            gestureDirection: 'horizontal', // Define la dirección del gesto (opcional)
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            gestureEnabled: true, // Habilita la navegación mediante gestos
            gestureDirection: 'horizontal', // Define la dirección del gesto (opcional)
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;