import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
const SplashScreen = ({navigation}) => {
  const LoginData = useSelector(state => state.loginData);
  useEffect(() => {
    setTimeout(() => {
      console.log('Get Data:::', LoginData);
      if (LoginData.length > 0) {
        navigation.replace('TabStack');
      } else {
        navigation.replace('LoginScreen');
      }
    }, 5000);
  }, []);

  return (
    <View style={styles.MainView}>
      <LinearGradient
        colors={['#000428', '#004e92']}
        style={styles.linearGradient}>
        <View style={styles.profileView}>
          <Image
            source={require('../../Assets/check-1.png')}
            style={styles.userimg}
          />
        </View>
        <Text style={styles.TextStyle}>Task</Text>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;
