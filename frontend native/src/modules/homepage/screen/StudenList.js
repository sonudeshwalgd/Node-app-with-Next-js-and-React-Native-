import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import ClassListCard from '../container/classlist/ClassListCard'
import { styled } from 'tailwindcss-react-native'
import StudentListCard from '../container/studentlist/StudentListCard'
import { globalAtomsStyle } from '../../../../assets/css/atomCss/atomCss'
import { useEffect } from 'react'
import { useState } from 'react'
export default function StudentList({navigation,route,}) {
  const [student,setStudent]=useState([])

  useEffect(()=>{
    console.log(route.params)
    setStudent(route.params.StudentList)
  },[route.params])
  return (
    <>
    <View style={style.main}>

    <View style={globalAtomsStyle.flexRowSpaceBetn}>
      <Pressable style={globalAtomsStyle.mainBtn}><Text style={globalAtomsStyle.btnText}>Submit</Text></Pressable>
      <Pressable style={globalAtomsStyle.mainBtn}><Text style={globalAtomsStyle.btnText}>Cancel</Text></Pressable>
    </View>
    <ScrollView style={globalAtomsStyle.scrollable}>

    <View style={style.wrapper}>
      {
        student.map((student)=>{
          return (
            <StudentListCard student={student} key={student._id} id={student._id}  name={student.name} roll={1}/>
            
          )
        })
      }
    </View>
    </ScrollView>
    </View>
    </>
  )
}

const style=StyleSheet.create({
  main:{
    backgroundColor:"black",
    padding:10,
    paddingTop:40,
    
  },
  wrapper:{
    backgroundColor:"black",
    paddingTop:40,
  },
})