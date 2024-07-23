import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const moderateScale = size => {
  return Math.ceil((width / guidelineBaseWidth) * size);
};

const moderateVerticalScale = size => {
  return Math.ceil((height / guidelineBaseHeight) * size);
};

const fontScale = size => {
  return size * PixelRatio.getFontScale();
};

export default {
  fontScale,
  moderateScale,
  moderateVerticalScale,
};
