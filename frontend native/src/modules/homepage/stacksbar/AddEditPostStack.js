import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddViewPost from '../screen/AddViewPost.js'


const Stack=createStackNavigator()


export default function AddEditPostStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AddViewPost" options={{headerShown:false}} component={AddViewPost}/>
    </Stack.Navigator>
  )
}