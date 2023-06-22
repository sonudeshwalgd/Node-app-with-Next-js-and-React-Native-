import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { axiosInstance } from '../../../../core/constants/axios'
import moment from 'moment'

export default function StudentListCard({name,id, roll=null,student}) {

  const sendingStatus=(status)=>{
    const payload={
      name:student.name,
      email:student.email,
      number:student.number,
      data:{
        date:moment(new Date()).format("YYYY-MM-DD"),
        data:{
          attendance:status
        }
      }
    }
    
    axiosInstance.post("student/attendance/today",payload)
  }

  return (
    <View style={style.wrapper}>

      <View style={style.left}>
        <Text style={style.name}>{roll} </Text>
        <Text style={style.name}>{name} </Text>
      </View>

      <View style={style.right}>
        <Pressable style={style.sectionBtn} onPress={()=>{sendingStatus(true)}}>
          <Text style={style.yesNo}>Present</Text>
        </Pressable>
        <Pressable style={style.sectionBtn} onPress={()=>{sendingStatus(false)}}>
          <Text style={style.yesNo}>Absent</Text>
        </Pressable>
      </View>
      
    </View>
  )
}

const style=StyleSheet.create({
    wrapper:{
        borderWidth:1,
        borderColor:"white",
        padding:12,
        borderRadius:8,
        marginBottom:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
      },
      name:{
        color:"white",
        fontSize:18,
        paddingBottom:8
      },
      left:{
        display:"flex",
        flexDirection:"row",
      },
      right:{
        display:"flex",
        flexDirection:"row",
        
    },
    section:{
      color:"white",
      
    },
    sectionBtn:{
      paddingHorizontal:8,
      paddingVertical:4,
      borderColor:"white",
      borderWidth:1,
      marginRight:8,
      
    },
    btnText:{
      color:"white",

    },
    yesNo:{
      color:"white"
    }

})