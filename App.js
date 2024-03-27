import React, { useEffect,useState } from 'react';
import Stacks from './navigation/Stack';
import { PaperProvider } from 'react-native-paper';
import { ProviderModeBlack } from './context/context';
import { ProviderQuestions } from './context/questionsProvider';
import * as Font from 'expo-font';

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
      const prepare = async () => {
        try {
          const loadFonts = async () => {
            return Font.loadAsync({
              righteous: require("./assets/fonts/Righteous-Regular.ttf"),
              poiret: require("./assets/fonts/PoiretOne-Regular.ttf"),
              merri: require("./assets/fonts/MerriweatherSans-VariableFont_wght.ttf"),
              explora: require("./assets/fonts/Explora-Regular.ttf")
            });
          };
  
          await loadFonts();
          await new Promise((resolve) => setTimeout(resolve, 5000)); // Espera 5 segundos
        } catch (e) {
          console.warn(e);
        } finally {
          setAppIsReady(true);
        }
      };
      prepare();
    }, []);
  
    if (!appIsReady) {
      return null; // or render a loading indicator
    }
  
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
