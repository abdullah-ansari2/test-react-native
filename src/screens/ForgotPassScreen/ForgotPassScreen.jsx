import React, {useState} from 'react';
import {Image, TextInput, View} from 'react-native';

import {styles} from './styles';
import {Container, Typography} from '../../atom-components';
import {Header, PrimaryButton} from '../../components';
import {COLORS} from '../../globals';
import {sizer} from '../../helpers';

export default function ForgotPassScreen({navigation}) {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = text => {
    let formattedPhone = text.replace(/[^\d+]/g, '');

    if (formattedPhone.length === 1 && formattedPhone !== '+') {
      formattedPhone = '+' + formattedPhone;
    }
    if (formattedPhone.length > 2) {
      formattedPhone =
        formattedPhone.slice(0, 2) + ' ' + formattedPhone.slice(2);
    }
    if (formattedPhone.length > 7) {
      formattedPhone =
        formattedPhone.slice(0, 7) + ' ' + formattedPhone.slice(7);
    }

    setPhone(formattedPhone);
  };
  return (
    <Container styles={{justifyContent: 'space-between'}}>
      <View>
        <Header heading="Your Phone Number is the Key" />
        <Typography semiBold color={COLORS.grey} mB={10}>
          Phone number
        </Typography>
        <View style={styles.inputContainer}>
          <View style={styles.iconView}>
            <Image
              style={styles.flagIcon}
              source={require('../../assets/images/flag.png')}
            />
            <Image
              style={styles.arrowIcon}
              source={require('../../assets/images/down-arrow.png')}
            />
          </View>
          <View style={styles.divider} />
          <TextInput
            style={styles.inputField}
            keyboardType="number-pad"
            placeholder="+1 3453 3423"
            placeholderTextColor={COLORS.grey}
            value={phone}
            onChangeText={handlePhoneChange}
            maxLength={12}
          />
        </View>
      </View>
      <PrimaryButton
        title="Send Code"
        style={{marginBottom: sizer.moderateVerticalScale(37)}}
        disabled={phone.length != 12}
        handlePress={() => navigation.navigate('OTP')}
      />
    </Container>
  );
}
