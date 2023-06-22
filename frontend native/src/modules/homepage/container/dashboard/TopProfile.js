import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../../store/homeModule/slices/LoginSignupSlice/LoginSignupLogoutSlice'
import logo from "./../../../../../assets/homepage/dashboard/logo.jpg"

export default function TopProfile() {

const {name,email,number,role}=useSelector(state=>state.auth)

  return (
    <View style={style.wrapper}>
      <Image source={logo} style={style.logo}/>
      <Text style={style.name}>{name}</Text>
      <Text style={style.name}>{email}</Text>
      <Text style={style.name}>{number}</Text>
      <Text style={style.name}>{role}</Text>
    </View>
  )
}
const style=StyleSheet.create({
  wrapper:{
    backgroundColor:"black",
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  },
  logo:{
    height:60,
    width:60,
    borderRadius:50,
    borderWidth:2,
    padding:10,
    marginRight:20,
    borderWidth:1,
    borderColor:"white"
  },
  name:{
    fontSize:18,
    color:'white',
    borderWidth:2
  }
})