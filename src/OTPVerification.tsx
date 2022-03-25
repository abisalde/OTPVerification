import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Modal,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import OtpInputs from 'react-native-otp-inputs';

// Interface props, Route constants && Schema
// import {ScreenDefaultProps} from '../../../@types/interface';
// import {OTP} from '../../../navigation/routes';

// Redux state Actions
// import {loginUserSuccess} from '../../../redux/features/auth';

// API && Storage
// import AuthApi from '../../../services/auth';
// import AuthStorage from '../../../utils/storage';

// Components && Helpers && Hooks
// import Notification from './Notification';
// import {ErrorMessage} from '../../../components/forms';
// import {TimerCountDown} from '../../../helpers';
// import {useAppDispatch} from '../../../hooks';

// Styles, Colors, SVGs
import Styles from './styles';

// CountDown timer
export const TimerCountDown = (counter: number): any => {
  return (
    (counter - (counter %= 60)) / 60 + (9 < counter ? ':' : ':0') + counter
  );
};

const OTPVerification = (): JSX.Element => {
  const {width, height} = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(300);
  const [code, setCode] = useState<string>('');

  //   const [otpError, setOtpError] = useState<string>('');
  //   const [message, setMessage] = useState<any>({text: '', title: '', type: ''});
  //   const [userData, setUserData] = useState<any>();

  // Verification of the OTP Code
  //   const VerifyOTP = async (): Promise<void> => {
  //     if (code.length < 4) return setOtpError('Please enter 4 digits valid OTP');

  //     setModalVisible(true);
  //   };

  // Resend OTP Code
  //   const ResendOTP = async (): Promise<void> => {
  //     const result = await AuthApi.resendOTP({email});
  //     if (!result.ok)
  //       return setMessage({
  //         text: result?.data.message,
  //         title: result?.problem,
  //         type: 'error',
  //       });
  //     navigation.replace(OTP, {email});
  //   };

  // Navigate User to Dashboard
  const NavigateToDashboard = (): void => {
    // dispatch(loginUserSuccess(userData?.data));
    // // Store user details in the storage
    // AuthStorage.setUserData(userData);
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    const timer: any =
      counter > 0 &&
      setInterval(() => {
        if (counter > 0) setCounter(counter - 1);
      }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: 'white', width, height}]}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      {/* {message.text ? (
        <Notification
          text={message.text}
          title={message.title}
          type={message.type}
          onHide={() => {
            setMessage({text: '', title: '', type: ''});
          }}
        />
      ) : (
        <></>
      )}
      <View style={[Styles.imageTop]}>
        <Mesh width={width} />
      </View> */}

      <View
        style={[
          {
            marginHorizontal: 20,
            marginTop: 10,
            marginBottom: 30,
          },
        ]}>
        <Text style={[Styles.textDesc, {color: 'blue'}]}>Check your email</Text>
        <View style={[Styles.subText]}>
          <Text style={[Styles.textDesc, {color: 'red'}]}>
            We sent you an email with a code.{'\n'}Please enter the code below
          </Text>
          <View style={[Styles.lockView, {backgroundColor: 'purple'}]}></View>
          {/* {otpError ? <ErrorMessage error={otpError} visible={true} /> : <></>} */}
        </View>
        <KeyboardAvoidingView
          style={[Styles.container]}
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
          enabled
          keyboardVerticalOffset={10}>
          <OtpInputs
            autofillFromClipboard={true}
            handleChange={(otpCode): any => {
              setCode(otpCode);
            }}
            numberOfInputs={4}
            style={[Styles.OTPinput]}
            inputStyles={[
              Styles.inputOtp,
              {borderColor: 'gray', borderRadius: 10},
            ]}
          />

          <Text style={[Styles.countDown, {color: 'violet', fontSize: 8}]}>
            code expires in:{' '}
            <Text style={[{color: 'purple'}]}>{TimerCountDown(counter)}</Text>{' '}
          </Text>
          <View style={[Styles.buttonContainer]}>
            <Button title="Verify" />

            <Button title="Send again" />
          </View>
        </KeyboardAvoidingView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={(): any => {
            setModalVisible(!modalVisible);
          }}>
          <View style={[Styles.modalContainer, {width}]}>
            <View style={[Styles.modalBox, {shadowColor: 'purple'}]}>
              <View style={[Styles.rectangle, {backgroundColor: 'violet'}]}>
                <TouchableOpacity
                  onPress={(): void => setModalVisible(!modalVisible)}>
                  <Text>{''}</Text>
                </TouchableOpacity>
              </View>
              <View style={[Styles.avatarContainer]}></View>
              <View style={[Styles.textContainer]}>
                <Text style={[Styles.text, {color: 'violet'}]}>
                  Welcome Aboard
                </Text>
                <Text style={[Styles.text, {color: 'violet'}]}>
                  Your user account has been set up. Please complete the profile
                  area with the remaining required information.
                </Text>
              </View>
              <Button title="Go to Dashboard" />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerification;
