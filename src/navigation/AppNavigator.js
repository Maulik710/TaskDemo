import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/index';
import HomeScreen from '../screens/HomeScreen/index';
import LoginScreen from '../screens/LoginScreen/index';
import SignupScreen from '../screens/SignupScreen/index';
import ProfileScreen from '../screens/ProfileScreen/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, Image, View} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarStyle: {
          height: 60,
          backgroundColor: '#004e92',
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            return (
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: focused ? '#EDEDFD' : '',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 20,
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: focused ? '#000' : '#EFEEFF',
                  }}
                  source={require('../Assets/home.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            return (
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: focused ? '#EFEEFF' : '',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 20,
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: focused ? '#000' : '#EFEEFF',
                  }}
                  source={require('../Assets/user.png')}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
