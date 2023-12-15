import React from 'react';
import {OTPcomponent} from '../Ui_Compo/OptComponent';

export default function Otp({navigation}) {
  function OnConfirm(e) {
    navigation.navigate('Main');
  }
  return <OTPcomponent onConfirmPress={OnConfirm} />;
}
