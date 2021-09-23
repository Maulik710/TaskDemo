import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {addItem, updateItem, addLogin} from '../../redux/reducer';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const SignupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const onSaveNote = () => {
    if (name && Email && Password && ConfirmPassword) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(Email) === false) {
        alert('Please enter valid emailID.');
      } else if (Password.length < 6) {
        alert('Please enter valid password it must be 6 character or more.');
      } else if (Password != ConfirmPassword) {
        alert('Password dose not match.');
      } else {
        let value = {
          id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
          Name: name,
          Email: Email,
          Password: Password,
          ConfirmPassword: ConfirmPassword,
        };
        dispatch(addItem(value));
        navigation.navigate('LoginScreen');
      }
    } else {
      alert('Fill Remaining Details.');
    }
  };

  return (
    <View style={styles.main}>
      <LinearGradient
        colors={['#000428', '#004e92']}
        style={styles.linearGradient}></LinearGradient>
      <View style={styles.footbackground}></View>
      <View style={styles.absView}>
        <View style={styles.profileView}>
          <Image
            source={require('../../Assets/check-1.png')}
            style={styles.userimg}
          />
        </View>
        <View style={styles.cardView}>
          <Text style={styles.loginText}>Sign Up</Text>
          <View style={styles.textInputview}>
            <Text style={styles.label}>FULL NAME</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter full name"
              placeholderTextColor={'#9e9e9e'}
              value={name}
              onChangeText={text => setName(text)}></TextInput>
          </View>
          <View style={styles.textInputview}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.textInput}
              placeholder="example@example.com"
              placeholderTextColor={'#9e9e9e'}
              value={Email}
              onChangeText={text => setEmail(text)}></TextInput>
          </View>
          <View style={styles.textInputview}>
            <Text style={styles.label}>PASSWORD</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Password"
              placeholderTextColor={'#9e9e9e'}
              value={Password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}></TextInput>
          </View>
          <View style={styles.textInputview}>
            <Text style={styles.label}>RE-TYPE PASSWORD</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Re-Type Password"
              placeholderTextColor={'#9e9e9e'}
              value={ConfirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              secureTextEntry={true}></TextInput>
          </View>
          <TouchableOpacity
            style={styles.btnstyle}
            onPress={() => onSaveNote()}>
            <Text style={styles.btnText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerTextView}>
          <Text style={styles.registerText} onPress={() => navigation.goBack()}>
            Do you have Account?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
