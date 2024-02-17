import * as React from 'react';
import Stack from './navigation/Stack';
import { PaperProvider } from 'react-native-paper';
import { AppProvider } from './context/context';




const App = () => {
  return (
  <AppProvider>
    <PaperProvider>
      <Stack/>
    </PaperProvider>
  </AppProvider>
  );
};

export default App;