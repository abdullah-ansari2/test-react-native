import React from 'react';
import {View} from 'react-native';
import sizer from '../helpers/sizer';
import {COLORS, CONSTANTS} from '../globals';

export default function Container({
  children,
  styles = {},
  pT = 0,
  pH = CONSTANTS.containerPaddingX,
}) {
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: COLORS.dark,
          paddingHorizontal: sizer.moderateScale(pH),
          paddingTop: sizer.moderateScale(pT),
        },
        styles,
      ]}>
      {children}
    </View>
  );
}
