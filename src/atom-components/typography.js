import React from 'react';
import { Text } from 'react-native';

import { COLORS } from '../globals';
import sizer from '../helpers/sizer';

export default function Typography({
  color = COLORS.dark,
  size = 16,
  pT = 0,
  pB = 0,
  pR = 0,
  pL = 0,
  mT = 0,
  mB = 0,
  mL = 0,
  mR = 0,
  medium = false,
  bold = false,
  semiBold = false,
  light = false,
  thin = false,
  upperCase = false,
  capitalize = false,
  textAlign = 'left',
  numberOfLines,
  LineHeight,
  children,
  style,
  ...props
}) {
  // Determine the font weight based on the provided props
  const fontWeight = bold
    ? 'bold'
    : semiBold
    ? '600'
    : medium
    ? '500'
    : light
    ? '300'
    : thin
    ? '200'
    : 'normal';

  const styleObj = {
    color: color,
    fontSize: sizer.fontScale(size),
    paddingTop: sizer.moderateVerticalScale(pT),
    paddingBottom: sizer.moderateVerticalScale(pB),
    paddingLeft: sizer.moderateScale(pL),
    paddingRight: sizer.moderateScale(pR),
    marginTop: sizer.moderateVerticalScale(mT),
    marginBottom: sizer.moderateVerticalScale(mB),
    marginLeft: sizer.moderateScale(mL),
    marginRight: sizer.moderateScale(mR),
    fontWeight: fontWeight,
    ...(upperCase && { textTransform: 'uppercase' }),
    ...(capitalize && { textTransform: 'capitalize' }),
    textAlign: textAlign,
    ...(LineHeight && { lineHeight: LineHeight }),
    ...style,
    ...props,
  };

  return (
    <Text style={styleObj} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}
