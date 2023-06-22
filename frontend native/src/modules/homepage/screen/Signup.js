import { View, Text, TextInput, StyleSheet, Button, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, signup } from '../../../store/homeModule/slices/LoginSignupSlice/LoginSignupLogoutSlice'


export default function Signup({navigation}) {

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [number,setNumber]=useState("")

  const dispatch=useDispatch()
  const state=useSelector(state=>state.auth)
  const signupHandler=()=>{
    const data={
      email,
      number,
      name,
    }
    
    dispatch(signup(data)).then(res=>navigation.navigate("verifyOtp"))
  }


  return (
    <View style={style.flex}>
      <Text>Enter your name</Text>
      <TextInput onChangeText={setName} placeholder='name' value={name}  style={style.input}></TextInput>
      <Text>Enter your email</Text>
      <TextInput onChangeText={setEmail} placeholder='email' value={email}  style={style.input}></TextInput>
      <Text>Enter your number</Text>
      <TextInput onChangeText={setNumber} value={number} placeholder='number'  style={style.input}></TextInput>
      <Button title="Signup" onPress={signupHandler}/>
      <Text>Already have an account 
        <Pressable onPress={()=>navigation.navigate("login")}><Text>Signin</Text></Pressable>  
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