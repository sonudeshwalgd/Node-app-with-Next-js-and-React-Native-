import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import IntroSlider from '../screen/IntroSlider'
import Login from '../screen/Login'
import Signup from '../screen/Signup'
import VerifyOTP from '../screen/VerifyOTP'
import SetPassword from '../screen/SetPassword'

const Stack= createStackNavigator()

export default function EntryRoute() {
  return (
<>
    <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown :false}}  name="introSlider" component={IntroSlider}/> */}
        <Stack.Screen options={{headerShown :false}}  name="login" component= {Login}/>
        <Stack.Screen options={{headerShown :false}}  name="signup" component= {Signup}/>
        <Stack.Screen options={{headerShown :false}}  name="verifyOtp" component= {VerifyOTP}/>
        <Stack.Screen options={{headerShown :false}}  name="setPassword" component= {SetPassword}/>
    </Stack.Navigator>

</>
  )
}