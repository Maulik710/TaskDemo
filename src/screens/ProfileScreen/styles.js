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
    marginTop: 65,
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',

    padding: 20,
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
    alignItems: 'center',

    marginTop: 30,
    // paddingHorizontal: 15,
  },
  textInputview1: {
    width: '100%',
    alignItems: 'center',

    marginTop: 10,
    // paddingHorizontal: 15,
  },
  label: {
    fontSize: 26,
    color: '#000428',
    fontWeight: '700',
  },
  emailLabel: {
    fontSize: 16,
    color: '#000428',
    fontWeight: '500',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#000428',
    paddingVertical: 10,
  },
  profileView: {
    height: 110,
    width: 110,
    backgroundColor: 'white',
    borderRadius: 55,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,

    // top: 50,
  },
  absView: {
    position: 'absolute',
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  userimg: {
    height: 100,
    width: 100,
    borderRadius: 50,
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
