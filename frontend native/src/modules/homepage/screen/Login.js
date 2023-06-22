import { View, Text, TextInput, StyleSheet, Button, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../store/homeModule/slices/LoginSignupSlice/LoginSignupLogoutSlice'


export default function Login({navigation}) {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

  const dispatch=useDispatch()
  const state=useSelector(state=>state.auth)

  const loginHandler=()=>{
    const data={
      email,
      password
    }
    dispatch(login(data))
  }


  return (
    <View style={style.flex}>
      <Text>Enter Your Email</Text>
      <TextInput onChangeText={setEmail} value={email}  style={style.input}></TextInput>
      <Text>Enter Your Password</Text>
      <TextInput onChangeText={setPassword} value={password}  style={style.input}></TextInput>
      <Button title="Login" onPress={loginHandler}/>
      <Text>Don't have an account 
        <Pressable onPress={()=>navigation.navigate("signup")}><Text>Signup</Text></Pressable>  
      </Text>
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