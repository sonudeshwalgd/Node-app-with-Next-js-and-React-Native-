import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ClickNotes from '../container/notes/clickNotes'
import logo from "./../../../../assets/homepage/dashboard/logo.jpg"


export default function Notes() {
  return (

    <>
    <ScrollView style={style.wrapper}>

        <View style={style.notesCard}>
          <ClickNotes  image={logo} title="Sonu Deshwal" date="12 Aug , 23" description="Notes for the upcoming exams"/>
        </View>
        <View style={style.notesCard}>
          <ClickNotes  image={logo} title="Sonu Deshwal" date="12 Aug , 23" description="Notes for the upcoming exams"/>
        </View>
        <View style={style.notesCard}>
          <ClickNotes  image={logo} title="Sonu Deshwal" date="12 Aug , 23" description="Notes for the upcoming exams"/>
        </View>
     
    </ScrollView>
    </>
  )
}

const style=StyleSheet.create({
  wrapper:{
    backgroundColor:"black",
    paddingTop:30,
    paddingHorizontal:8
  },
  notesCard:{
    marginBottom:12
  }


})