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
import LinearGradient from 'react-native-linear-gradient';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {addItem, updateItem, addLogin} from '../../redux/reducer';
import {useSelector} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const LoginData = useSelector(state => state.loginData);
  const itemData = useSelector(state => state.itemList);

  const googleLogin = async () => {
    GoogleSignin.configure({
      webClientId:
        '920845141341-1gd38d6rehfij6ul4cq81b2un8hqlccl.apps.googleusercontent.com',
    });
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo.user);

      let value = {
        id: 1,
        Email: userInfo?.user?.email,
        Name: userInfo?.user?.name,
        photo: userInfo?.user?.photo,
      };
      dispatch(addLogin(value));
      navigation.replace('TabStack');
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }
  };

  const onSaveNote = () => {
    if (Email && Password) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(Email) === false) {
        alert('Please enter valid emailID.');
      } else if (Password.length < 6) {
        alert('Please enter valid password it must be 6 character or more.');
      } else {
        let final = itemData.filter(item => {
          if (item.Email == Email && item.Password == Password) {
            return true;
          }
        });
        console.log('Get Response:::::', final);
        if (final.length > 0) {
          let value = {
            id: 1,
            Email: Email,
            Password: Password,
          };
          dispatch(addLogin(value));
          navigation.replace('TabStack');
        } else {
          alert('Please enter valid emailID and password');
        }
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
          <Text style={styles.loginText}>LOGIN</Text>
          <View style={styles.textInputview}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.textInput}
              placeholder="example@example.com"
              placeholderTextColor={'#9e9e9e'}
              value={Email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.textInputview}>
            <Text style={styles.label}>PASSWORD</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Password"
              placeholderTextColor={'#9e9e9e'}
              value={Password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={styles.btnstyle}
            onPress={() => onSaveNote()}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerTextView}>
          <TouchableOpacity onPress={() => googleLogin()}>
            <Image
              source={require('../../Assets/google.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('SignupScreen')}>
            Do not have Account?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
