import {StyleSheet} from 'react-native';
import {Scale} from '../../constants/index';

export const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  safeAreaViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {width: Scale(150), height: Scale(150)},
});
