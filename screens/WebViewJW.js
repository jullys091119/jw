import React from 'react';
import { View} from 'react-native';
import { WebView } from 'react-native-webview';

const JWorgScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://www.jw.org/' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default JWorgScreen;
