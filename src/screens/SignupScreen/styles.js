import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e0fdff',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 0.4,
    alignItems: 'center',
  },
  footbackground: {
    flex: 0.6,
  },
  cardView: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 30,
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
    marginTop: 20,
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
    fontSize: 16,
    color: '#000428',
    fontWeight: '500',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#000428',
    paddingVertical: 5,
  },
  profileView: {
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 35,
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
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  registerTextView: {
    marginTop: 40,
    alignItems: 'center',
  },
  registerText: {
    color: '#000428',
    fontSize: 15,
    fontWeight: '800',
  },
});
