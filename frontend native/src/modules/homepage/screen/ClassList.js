import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ClassListCard from '../container/classlist/ClassListCard'
import { styled } from 'tailwindcss-react-native'
import { axiosInstance } from '../../../core/constants/axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ClassList({navigation}) {

  const [classListData,setClassListData]=useState([])

  const classListHandler= async ()=>{ 
    const payload =await axiosInstance.get("/admin/department")
    setClassListData(payload.data)
  }

  useEffect(() => {
    classListHandler()
  }, [])
  


  return (
    <ScrollView style={style.main}>

    <View style={style.wrapper}>
      {
        classListData.map((department)=>{
          return(
            <ClassListCard key={department._id}  navigation={navigation} name={department.department[0].title} section={department.department[0].section} />
          )
        })
      }
    </View>
    </ScrollView>
  )
}

const style=StyleSheet.create({
  main:{
    backgroundColor:"black",
  },
  wrapper:{
    padding:10,
    paddingTop:40,
  },
})