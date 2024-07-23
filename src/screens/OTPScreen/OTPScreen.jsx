import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import OTPTextInput from 'react-native-otp-textinput';

import {Container, Typography} from '../../atom-components';
import {Header, PrimaryButton} from '../../components';
import {sizer} from '../../helpers';
import {COLORS} from '../../globals';

export default function OTPScreen({navigation}) {
  const [otpValue, setOtpValue] = useState();

  let otpInput = useRef(null);

  const isFiveDigit = value => {
    const regex = /^\d{5}$/;
    return regex.test(value);
  };

  return (
    <Container>
      <Header heading={`Let’s Get You Back In!${'\n'}Enter Your Code Below`} />
      {/* OTP Inputs */}
      <OTPTextInput
        ref={e => (otpInput = e)}
        inputCount={5}
        textInputStyle={styles.otpInput}
        {...styles.borderColor}
        handleTextChange={e => setOtpValue(e)}
      />
      {/* Resend Section  */}
      <Typography
        size={13}
        color={COLORS.white}
        textAlign="center"
        mT={26}
        mB={6}>
        Didn't receive an SMS code?
      </Typography>
      <TouchableOpacity style={{marginBottom: sizer.moderateVerticalScale(25)}}>
        <Typography semiBold color={COLORS.white} textAlign="center">
          Resend
        </Typography>
      </TouchableOpacity>
      {/* Primary Verify Button */}
      <PrimaryButton
        title="Verify"
        disabled={!isFiveDigit(otpValue)}
        handlePress={() => navigation.navigate('NewPassword')}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  otpInput: {
    borderBottomWidth: 1,
    margin: 0,
    height: sizer.moderateScale(50),
    width: sizer.moderateScale(50),
    borderRadius: sizer.moderateScale(15),
    borderWidth: 1,
    color: COLORS.white,
    fontSize: 25,
    paddingVertical: 0,
  },
  borderColor: {
    tintColor: '#858585',
    offTintColor: '#858585',
  },
});
