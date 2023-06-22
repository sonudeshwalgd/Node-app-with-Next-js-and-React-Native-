import { View, Text, TextInput, StyleSheet, Button, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, setPassword, signup } from '../../../store/homeModule/slices/LoginSignupSlice/LoginSignupLogoutSlice'


export default function SetPassword({navigation}) {

const [newPassword,setNewPassword]=useState("")
const [confirm,setConfirm]=useState("")

  const dispatch=useDispatch()
  const {name,email,number}=useSelector(state=>state.auth)
  const state=useSelector(state=>state.auth)
  const passwordHandler=()=>{
    const data={
        newPassword,
        name,email,number
    }
    
    dispatch(setPassword(data)).then(res=>navigation.navigate("login"))
  }


  return (
    <View style={style.flex}>
      <Text>Enter your Password</Text>
      <TextInput onChangeText={setNewPassword} placeholder='password' value={newPassword}  style={style.input}></TextInput>
      <Text>Confirm your Password</Text>
      <TextInput onChangeText={setConfirm} placeholder='confirm' value={confirm}  style={style.input}></TextInput>
      <Button title="Set Password" onPress={passwordHandler}/>
        <Pressable onPress={()=>navigation.navigate("login")}><Text>Cancel</Text></Pressable>  
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