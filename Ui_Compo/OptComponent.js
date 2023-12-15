/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

export const OTPcomponent = ({onResendPress, onConfirmPress, Loading}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e1b38',
      }}>
      <Image
        source={require('../Assets/otp.png')}
        style={{
          height: 200,
          width: 200,
        }}
      />
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
        }}>
        An OTP is sent to your inbox
      </Text>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Please verify yourself
      </Text>
      <OTPTextView
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.00)',
          borderRadius: 10,
        }}
        inputCount={5}
        autoFocus={true}
        tintColor={'rgb(146, 146, 146)'}
        handleTextChange={e => {
          if (e.length === 5) {
            onConfirmPress(e);
          }
        }}
        textInputStyle={{
          borderWidth: 2,
          borderRadius: 10,
          color: 'white',
        }}
      />
      <TouchableOpacity
        onPress={() => {
          if (!Loading) {
            onResendPress();
          }
        }}
        style={{paddingVertical: 20}}>
        {!Loading ? (
          <Text style={{color: 'rgb(88, 132, 252)'}}>Resend code</Text>
        ) : (
          <ActivityIndicator />
        )}
      </TouchableOpacity>
      {/*<TouchableOpacity onPress={()=>{*/}
      {/*    if(!Loading) {*/}
      {/*        onConfirmPress()*/}
      {/*    }*/}
      {/*}} style={{*/}
      {/*    backgroundColor:color.acent,*/}
      {/*    width:"85%",*/}
      {/*    alignItems:"center",*/}
      {/*    justifyContent:"center",*/}
      {/*    marginTop:10,*/}
      {/*    height:60,*/}
      {/*    borderRadius:10,*/}
      {/*    elevation:3*/}
      {/*}}>*/}
      {/*    {!Loading?<Text style={{*/}
      {/*        color:color.primary,*/}
      {/*        fontWeight:"bold"*/}
      {/*    }}>Confirm</Text>:<ActivityIndicator/>}*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
};
