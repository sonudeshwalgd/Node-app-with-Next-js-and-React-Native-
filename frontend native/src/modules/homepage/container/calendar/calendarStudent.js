import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Calendar as CalendarModal } from 'react-native-calendars'
import { axiosInstance } from '../../../../core/constants/axios'
import { useSelector } from 'react-redux'

export default function CalendarStudent() {
  const [userData,setUserData]=useState({}) 
  const {name,email,number}=useSelector(state=>state.auth)

  const getStudentData=()=>{

    const payload={
      name,
      email,
      number,
    }
    axiosInstance.post("/student/data",payload).then(res=>{setUserData(
      ()=>{
        const data={}
        res.data.data.forEach(dayWiseData=>{
          data[dayWiseData.date]= {selected: true, marked: true, selectedColor:dayWiseData.data.attendance?"green":"red"}
        })
        return data
      }
    )})
  }

  useEffect(()=>{
    getStudentData()
  },[])


  return (
    <ScrollView style={style.main}> 
      <CalendarModal
            markedDates={userData}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e'
            }}
      />
      <View style={style.wrapper}>
        <View style={style.section}>
          <Text style={style.heading}>This Month</Text>

        <View style={style.card}>

          <View style={style.list}>
            <Text style={style.key}>Present</Text>
            <Text style={style.value}>12</Text>
          </View>
          <View style={style.list}>
            <Text style={style.key}>Absent</Text>
            <Text style={style.value}>2</Text>
          </View>
          <View style={style.list}>
            <Text style={style.key}>Event</Text>
            <Text style={style.value}>3</Text>
          </View>

        </View>
          
        </View>    
        <View style={style.section}>
          <Text style={style.heading}>This Year</Text>

        <View style={style.card}>

          <View style={style.list}>
            <Text style={style.key}>Present</Text>
            <Text style={style.value}>12</Text>
          </View>
          <View style={style.list}>
            <Text style={style.key}>Absent</Text>
            <Text style={style.value}>2</Text>
          </View>
          <View style={style.list}>
            <Text style={style.key}>Event</Text>
            <Text style={style.value}>3</Text>
          </View>

        </View>
          
        </View>    
        <View style={style.section}>
          <Text style={style.heading}>Upcoming </Text>

        <View style={style.card}>

          <View style={style.list}>
            <Text style={style.key}>Present</Text>
            <Text style={style.value}>12</Text>
          </View>
          <View style={style.list}>
            <Text style={style.key}>Absent</Text>
            <Text style={style.value}>2</Text>
          </View>
          <View style={style.list}>
            <Text style={style.key}>Event</Text>
            <Text style={style.value}>3</Text>
          </View>

        </View>
          
        </View>    
        <View style={style.section}>
          <Text style={style.heading}>Required</Text>

        <View style={style.card}>

          <View style={style.list}>
            <Text style={style.key}>Present</Text>
            <Text style={style.value}>12</Text>
          </View>
          <View style={style.list}>
            <Text style={style.key}>Absent</Text>
            <Text style={style.value}>2</Text>
          </View>
          <View style={style.list}>
            <Text style={style.key}>Event</Text>
            <Text style={style.value}>3</Text>
          </View>

        </View>
          
        </View>    
      </View>
    </ScrollView>
  )
}
const style=StyleSheet.create({
  main:{
    backgroundColor:'black',
    height:"100%"
  },
  wrapper:{
    backgroundColor:'black',
    paddingVertical:40,
    paddingHorizontal:8,
    flexDirection:"row",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-between",
    alignItems:"center"

  },
  section:{
    width:"50%",
    maxWidth:250,
    paddingBottom:40,
    paddingHorizontal:3,
    
  },
  heading:{
    textAlign:"center",
    width:"100%",
    position:"relative",
    color:"white",
    paddingBottom:10,
    fontSize:20,
    
  },
  
  card:{
    paddingHorizontal:6,
    backgroundColor:"white",
    borderRadius:8,
    paddingVertical:4
  },
  list:{
    paddingVertical:6,
    display:"flex",
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:"row"
  },
  key:{
    fontSize:16,
  },
  value:{
    fontSize:18,

  }
})