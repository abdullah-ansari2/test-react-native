import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {COLORS} from '../globals';
import {ForgotPassScreen, HomeScreen, OTPScreen, NewPassword} from '../screens';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.dark} barStyle={'light-content'} />
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default RootNavigation;
