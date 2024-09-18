import {StyleSheet} from 'react-native';
import {COLORS, Scale} from '../../constants/index';

export const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: COLORS.green,
  },
  safeAreaViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {width: Scale(150), height: Scale(150)},
  skipViewStyle: {
    width: Scale(250),
    height: Scale(50),
    borderRadius: Scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    marginTop: Scale(500)
  },

  skipTextStyle: {
    fontSize: Scale(18),
    color: COLORS.black,

  },



});
