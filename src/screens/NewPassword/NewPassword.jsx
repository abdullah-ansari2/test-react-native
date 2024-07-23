import {StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';

import {Container} from '../../atom-components';
import {Header, PasswordField, PrimaryButton} from '../../components';

export default function NewPassword({navigation}) {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  return (
    <Container>
      <Header heading="Welcome Back! Create a New Password" back={false} />
      <PasswordField placeholder="New password" setPassword={setPassword} />
      <PasswordField
        placeholder="Repeat new password"
        mB={34}
        setPassword={setRepeatPassword}
      />
      <PrimaryButton
        title="Save"
        disabled={!password && !repeatPassword}
        handlePress={() => navigation.navigate("Home")}
      />
    </Container>
  );
}

const styles = StyleSheet.create({});
