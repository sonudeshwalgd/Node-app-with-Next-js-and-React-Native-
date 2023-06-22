import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import EntryRoute from './stacksbar/EntryRoute'
import DashboardRoutes from './stacksbar/dashboardRoutes'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../store/homeModule/slices/LoginSignupSlice/LoginSignupLogoutSlice';
import { BottomtabBar } from './stacksbar/BottomTab';

export default function HomeComponent() {
const token=useSelector(state=>state.auth?.token)
const dispatch= useDispatch()

const getData = async () => {
  try {
    dispatch(setToken(await AsyncStorage.getItem("user")))
  } catch (e) {
  }
}

useEffect(()=>{
  getData()
},[])

  return (
      <>
      {
        token? <BottomtabBar/>:<EntryRoute/>
      }
      </>
  )
}