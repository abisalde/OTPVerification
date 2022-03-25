import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  imageTop: {
    opacity: 0.5,
  },
  subText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  textDesc: {
    textAlign: 'center',
  },
  lockView: {
    width: 48,
    height: 48,
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  inputOtp: {
    borderWidth: 2,
    width: 60,
    padding: 5,
    height: 60,
    textAlign: 'center',
    fontFamily: 'Muli-Bold',
    fontSize: 34,
  },
  OTPinput: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countDown: {
    marginVertical: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  textContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  text: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  modalBox: {
    maxHeight: 475,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    flexGrow: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 12,
  },
  rectangle: {
    borderRadius: 20,
    marginVertical: 7,
    height: 4,
    width: 30,
  },
});

export default styles;
