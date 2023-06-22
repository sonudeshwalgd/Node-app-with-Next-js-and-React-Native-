import { View, Text } from 'react-native'
import React from 'react'
import Dashboard from '../screen/Dashboard'
import TakeAttendaceStack from "./TakeAttendaceStack.js"
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import AddEditPostStack from './AddEditPostStack'


const Stack=createStackNavigator()


export default function DashboardRoutes() {
  const {role}=useSelector(state=>state.auth)
  return (
        <>
        <Stack.Navigator >
            <Stack.Screen name='dashboard-main' options={{headerShown:false}} component={Dashboard}/>
             {role=="staff"  && <Stack.Screen name='TakeAttendaceStack' options={{headerShown:false}} component={TakeAttendaceStack}/>}
             {role=="staff"  && <Stack.Screen name='AddEditPostStack' options={{headerShown:false}} component={AddEditPostStack}/>}

        </Stack.Navigator>

        
        </>
  )
}