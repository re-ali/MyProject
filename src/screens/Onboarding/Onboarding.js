import React, {useEffect} from 'react';
import {
  ImageBackground,
  Image,
  SafeAreaView,
  NativeModules,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {logo} from '../../assets/imagePath';
import {styles} from './OnboardingStyle';
// import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
// import {navigate} from '../../utility/Navigate';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as actions from '../../redux/actions/actions';
// import {
//   getEncryptData,
//   setEncryptData,
//   removeEncryptData,
// } from '../../helper/Helper';
// import {ENCRYPTED_USER_KEY, FIRST_LOGIN, APP_LOCK} from '../../helper/config';

const Splash = ({navigation}) => {
  useEffect(() => {
    goToHome();
  }, [2000]);

  const goToHome = () => {
    let _token = 'adlsjlfdsf';
  };

  return (
    <ImageBackground
      source={logo}
      style={styles.mainViewStyle}
      resizeMode="cover">
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.skipViewStyle}>
        <Text style={styles.skipTextStyle}>Hello Onboarding</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Splash;
