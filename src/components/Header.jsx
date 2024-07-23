import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {sizer} from '../helpers';
import {baseOpacity} from '../globals';
import {Typography} from '../atom-components';

export default function Header({heading = '', mB = 74, back = true}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: sizer.moderateVerticalScale(59),
        marginBottom: sizer.moderateVerticalScale(mB),
      }}>
      <TouchableOpacity
        style={{alignSelf: 'flex-start', opacity: back ? 1 : 0}}
        activeOpacity={baseOpacity}
        onPress={() => navigation.goBack()}
        hitSlop={styles.hitSlop}
        disabled={!back}>
        <Image
          style={styles.backIcon}
          source={require('../assets/images/back-arrow.png')}
        />
      </TouchableOpacity>
      <Typography size={27} semiBold color="white" mT={32} LineHeight={38}>
        {heading}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  hitSlop: {right: 20, left: 20, bottoms: 20, top: 20},
  backIcon: {
    width: sizer.moderateScale(12),
    height: sizer.moderateScale(18),
  },
});
