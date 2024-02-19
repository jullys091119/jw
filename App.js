import React, {useEffect} from 'react';
import Stack from './navigation/Stack';
import { PaperProvider } from 'react-native-paper';
import { AppProvider } from './context/context';
import * as Font from 'expo-font';

const App = () => {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'righteous': require('./assets/fonts/Righteous-Regular.ttf'),
        'poiret': require('./assets/fonts/PoiretOne-Regular.ttf'),
        'merri': require('./assets/fonts/MerriweatherSans-VariableFont_wght.ttf'),
      });
    };

    loadFonts();
  }, []);
  return (
  <AppProvider>
    <PaperProvider>
      <Stack/>
    </PaperProvider>
  </AppProvider>
  );
};

export default App;