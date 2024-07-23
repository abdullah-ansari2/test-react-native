import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {Typography} from '../atom-components';
import {sizer} from '../helpers';

export default function InterestItem({
  item = {},
  active = false,
  onSelect = () => {},
}) {
  return (
    <TouchableOpacity
      key={item?.id}
      activeOpacity={1}
      onPress={() => onSelect(item?.id)}>
      <View
        style={{
          alignSelf: 'flex-start',
        }}>
        <Image source={item?.imgPath} style={styles.img} />
        {active && (
          <View style={styles.overlay}>
            <Image source={require('../assets/images/tick.png')} />
          </View>
        )}
      </View>
      <Typography
        size={14}
        semiBold
        color="white"
        mT={5}
        mB={24}
        textAlign="center">
        {item?.label}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: sizer.moderateScale(86),
    height: sizer.moderateScale(86),
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...StyleSheet.absoluteFill,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
