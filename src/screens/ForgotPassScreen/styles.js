import {StyleSheet} from 'react-native';
import {sizer} from '../../helpers';
import {COLORS} from '../../globals';

export const styles = StyleSheet.create({
  inputContainer: {
    height: sizer.moderateVerticalScale(50),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 15,
    paddingVertical: sizer.moderateVerticalScale(9),
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: sizer.moderateScale(20),
    paddingRight: sizer.moderateScale(10),
    gap: sizer.moderateScale(10),
    flexDirection: 'row',
  },
  flagIcon: {
    width: sizer.moderateVerticalScale(20),
    height: sizer.moderateVerticalScale(20),
  },
  arrowIcon: {
    width: sizer.moderateVerticalScale(16),
    height: sizer.moderateVerticalScale(16),
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: COLORS.grey,
  },
  inputField: {
    flex: 1,
    paddingHorizontal: sizer.moderateScale(10),
    paddingVertical: 0,
    fontWeight: '600',
    color: COLORS.white,
  },
});
