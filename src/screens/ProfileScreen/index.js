import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {useSelector} from 'react-redux';
const ProfileScreen = () => {
  const LoginData = useSelector(state => state.loginData);
  const itemData = useSelector(state => state.itemList);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (LoginData[0]?.Name) {
      setEmail(LoginData[0]?.Email);
      setName(LoginData[0]?.Name);
    } else {
      let final = itemData.filter(item => {
        if (
          item.Email == LoginData[0]?.Email &&
          item.Password == LoginData[0]?.Password
        ) {
          return true;
        }
      });
      setEmail(final[0]?.Email);
      setName(final[0]?.Name);
    }
  }, []);

  return (
    <View style={styles.main}>
      <LinearGradient
        colors={['#000428', '#004e92']}
        style={styles.linearGradient}></LinearGradient>
      <View style={styles.absView}>
        <View style={styles.profileView}>
          <Image
            source={
              LoginData[0]?.photo
                ? {uri: LoginData[0]?.photo}
                : require('../../Assets/user.png')
            }
            style={styles.userimg}
          />
        </View>
        <View style={styles.cardView}>
          <View style={styles.textInputview}>
            <Text style={styles.label}>{name}</Text>
          </View>
          <View style={styles.textInputview1}>
            <Text style={styles.emailLabel}>{email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
