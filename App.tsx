import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Config from './src/Config';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {width, height} = useWindowDimensions();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    width: width,
    height: height,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <Config />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
