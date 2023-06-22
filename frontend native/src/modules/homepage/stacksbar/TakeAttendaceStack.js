import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ClassList from "./../screen/ClassList.js"
import StudentList from '../screen/StudenList.js'
import { createStackNavigator } from '@react-navigation/stack'


const Stack=createStackNavigator()


export default function TakeAttendaceStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="classList" options={{headerShown:false}} component={ClassList}/>
        <Stack.Screen name="StudentList" options={{headerShown:false}} component={StudentList}/>
    </Stack.Navigator>
  )
}