import { View, Text, TextInput, StyleSheet, Button, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, signup, verifyOTP } from '../../../store/homeModule/slices/LoginSignupSlice/LoginSignupLogoutSlice'


export default function VerifyOTP({navigation}) {

const [OTP,setOTP]=useState("")

  const dispatch=useDispatch()
  const {name,email,number}=useSelector(state=>state.auth)
  const sendOTPHandler=()=>{
    const data={
      OTP,name,email,number
    }
    dispatch(verifyOTP(data)).then(res=>navigation.navigate("setPassword"))
  }


  return (
    <View style={style.flex}>
      <Text>Enter your OTP</Text>
      <TextInput onChangeText={setOTP} placeholder='Enter your OTP' value={OTP}  style={style.input}></TextInput>

      <Button title="Verify OTP" onPress={sendOTPHandler}/>
        <Pressable ><Text>Resend OTP </Text></Pressable>  
    </View>
  )
}

const style=StyleSheet.create({
  flex:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgb(0,100,200)",
    height:"100%",
    padding:10

  },
  input:{
    width:"100%",
    borderWidth:1,
    borderColor:"white",

  }

})