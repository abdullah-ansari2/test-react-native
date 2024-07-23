import {StyleSheet} from 'react-native';

import {sizer} from '../../helpers';
import {CONSTANTS} from '../../globals';

export const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: sizer.moderateScale(-CONSTANTS.containerPaddingX),
  },
  contentContainer: {
    gap: 12,
    paddingHorizontal: sizer.moderateScale(CONSTANTS.containerPaddingX),
  },
  otherInterestView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: sizer.moderateVerticalScale(85),
  },
  primaryBtnView: {
    paddingHorizontal: sizer.moderateScale(CONSTANTS.containerPaddingX),
  },
  primaryBtn: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: sizer.moderateVerticalScale(37),
  },
});
