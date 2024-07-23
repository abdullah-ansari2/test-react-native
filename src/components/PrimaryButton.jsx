import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Typography} from '../atom-components';
import {baseOpacity, COLORS} from '../globals';
import {sizer} from '../helpers';

export default function PrimaryButton({
  handlePress = () => {},
  disabled = false,
  title = 'Primary Button',
  style = {},
}) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {backgroundColor: disabled ? COLORS.secondary : COLORS.primary},
        style,
      ]}
      activeOpacity={baseOpacity}
      onPress={handlePress}
      disabled={disabled}>
      <Typography
        textAlign="center"
        color={disabled ? 'rgba(255, 255, 255, 0.5)' : COLORS.white}>
        {title}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: sizer.moderateVerticalScale(15),
    borderRadius: 100,
  },
});
