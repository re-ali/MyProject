import {Dimensions, Platform} from 'react-native';

//Screen Constatnts
const SCREEN_HEIGHT = 736;
const SCREEN_WIDTH = 414;

const {height, width} = Dimensions.get('screen');

export const HEIGHT = height;
export const WIDTH = width;
/**
/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function (units = 1) {
  return (width / SCREEN_WIDTH) * units;
}

const Scale = size => (height / SCREEN_HEIGHT) * size;

export {Scale};
