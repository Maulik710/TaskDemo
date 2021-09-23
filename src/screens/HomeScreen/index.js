import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeLogin} from '../../redux/reducer';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(removeLogin(1));
    navigation.replace('LoginScreen');
  };

  return (
    <View style={styles.main}>
      <LinearGradient
        colors={['#000428', '#004e92']}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => Logout()}>
          <Image
            style={styles.imgStyle}
            source={require('../../Assets/power-button.png')}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
