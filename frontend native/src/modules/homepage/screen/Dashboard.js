import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import TopProfile from '../container/dashboard/TopProfile'
import RoutesButton from '../container/dashboard/RoutesButton'


export default function Dashboard({navigation}) {
  return (
        <>
          <ScrollView style={style.wrapper}>

            <TopProfile/>
            <RoutesButton {...navigation}/>

          </ScrollView>
            

        </>
  )
}

const style=StyleSheet.create({
 wrapper:{
  padding:10,
  backgroundColor:"black",
 }
})