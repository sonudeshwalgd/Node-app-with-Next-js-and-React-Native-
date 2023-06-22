import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Calendar from '../container/calendar/calendarStudent.js'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import CalendarStudent from '../container/calendar/calendarStudent.js'
import CalendarStaff from '../container/calendar/calendarStaff.js'

const Stack=createStackNavigator()



export default function CalendarStack() {
  const {role}=useSelector(state=>state.auth)
  return (
    <Stack.Navigator>
        {role=="staff" && <Stack.Screen name="staffCalendar" options={{headerShown:false}} component={CalendarStaff}/>}
        {role=="student" && <Stack.Screen name="studentCalendar" options={{headerShown:false}} component={CalendarStudent}/>}
        {/* <Stack.Screen name="StudentList" options={{headerShown:false}} component={Calendar}/> */}
    </Stack.Navigator>
  )
}