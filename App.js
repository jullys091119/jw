import React, { useEffect } from 'react';
import Stacks from './navigation/Stack';
import { PaperProvider } from 'react-native-paper';
import { ProviderModeBlack } from './context/context';
import { ProviderQuestions } from './context/questionsProvider';



const App = () => {
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
