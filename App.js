import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainStackNavigator from './src/navigation/AppNavigator';
import store, {persistor} from './src/redux/store';
import {Provider as StateProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
export default function App() {
  return (
    <StateProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </StateProvider>
  );
}
