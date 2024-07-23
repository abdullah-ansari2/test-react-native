import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {sizer} from '../helpers';
import {COLORS} from '../globals';

const PasswordInput = ({placeholder = '', mB = 20, setPassword = () => {}}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={[
        styles.inputContainer,
        {marginBottom: sizer.moderateVerticalScale(mB)},
      ]}>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder={placeholder}
        placeholderTextColor={COLORS.grey}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Image
          source={require('../assets/images/eye-icon.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.grey,
    borderBottomWidth: 1,
    paddingBottom: sizer.moderateVerticalScale(20),
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    padding: 0,
    color: COLORS.white,
  },
  icon: {width: sizer.moderateScale(16), height: sizer.moderateScale(13)},
});

export default PasswordInput;
