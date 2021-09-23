import {createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['loginData'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
