import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e0fdff',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  footbackground: {
    flex: 1,
  },
  cardView: {
    marginTop: 20,
    width: '100%',
    height: 350,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 35,
    color: 'black',
    fontWeight: '300',
  },
  btnstyle: {
    width: '60%',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#000428',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 35,
    height: 50,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
  textInputview: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 18,
    color: '#000428',
    fontWeight: '500',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#000428',
    paddingVertical: 10,
  },
  profileView: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  absView: {
    position: 'absolute',
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  userimg: {
    height: 80,
    width: 80,
    borderRadius: 40,
    resizeMode: 'contain',
  },
  registerTextView: {
    marginTop: 30,
    alignItems: 'center',
  },
  registerText: {
    color: '#000428',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 10,
  },
  socialIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});
