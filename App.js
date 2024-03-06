import React, { useEffect } from 'react';
import Stacks from './navigation/Stack';
import { PaperProvider } from 'react-native-paper';
import { ProviderModeBlack } from './context/context';
import { ProviderQuestions } from './context/questionsProvider';

import * as Font from 'expo-font';

const App = () => {
  useEffect(() => {
    const loadFonts = () => {
      return Font.loadAsync({
        'righteous': require('./assets/fonts/Righteous-Regular.ttf'),
        'poiret': require('./assets/fonts/PoiretOne-Regular.ttf'),
        'merri': require('./assets/fonts/MerriweatherSans-VariableFont_wght.ttf'),
      });
    };

    loadFonts();
  }, []);

  return (
    <ProviderModeBlack>
      <ProviderQuestions>
        <PaperProvider>
          <Stacks/>
        </PaperProvider>
      </ProviderQuestions>
    </ProviderModeBlack>
  );
};

export default App;
