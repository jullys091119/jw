import * as React from 'react';
import Stack from './navigation/Stack';
import { PaperProvider } from 'react-native-paper';




const App = () => {
  return (
  <PaperProvider>
    <Stack/>
  </PaperProvider>
  );
};

export default App;