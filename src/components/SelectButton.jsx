import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {sizer} from '../helpers';
import {Typography} from '../atom-components';
import {COLORS} from '../globals';

export default function SelectButton({
  active = false,
  item = {},
  onSelect = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(item?.id)}
      activeOpacity={1}
      style={[styles.btn, active ? styles.active : styles.inactive]}>
      <Typography semiBold color={active ? COLORS.dark : COLORS.white}>
        {item?.label}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: sizer.moderateScale(20),
    paddingVertical: sizer.moderateVerticalScale(8),
    borderRadius: 100,
    borderWidth: 1,
  },
  active: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.dark,
  },
  inactive: {
    borderColor: COLORS.white,
  },
});
