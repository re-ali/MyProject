import React, {useEffect} from 'react';
import {
  ImageBackground,
  Image,
  SafeAreaView,
  NativeModules,
  Text,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';
import {logo} from '../../assets/imagePath';
import {styles} from './LoginStyle';
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

const Login = ({navigation}) => {

  useEffect(() => {
    goToHome();
  }, [2000]);

  const goToHome = () => {
    let _token = 'adlsjlfdsf';
  };

  return (
    <View style={styles.mainViewStyle}>

      <Text>Hello </Text>
     <Text>This is Login Page</Text>
    </View>
  );
};

export default Login;
