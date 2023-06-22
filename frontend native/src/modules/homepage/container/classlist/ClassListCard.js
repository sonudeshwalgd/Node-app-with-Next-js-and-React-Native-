import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

export default function ClassListCard({navigation,name, section=null}) {
  return (
    <Pressable  style={style.wrapper}>
      <Text style={style.name}>{name} </Text>

          <ScrollView style={style.section} horizontal={true}>
      {section?.map((section,index)=>{
          return (
              <>
              <TouchableOpacity key={index} onPress={()=>navigation.navigate("StudentList",{...section} )} >
                <View style={style.sectionBtn}>
                <Text style={style.btnText}>{section.sectionTitle}</Text>
                </View>
              </TouchableOpacity>
            </>
        )
    })}
    </ScrollView>
    </Pressable>
  )
}

const style=StyleSheet.create({
    wrapper:{
        borderWidth:1,
        borderColor:"white",
        padding:12,
        borderRadius:8,
        marginBottom:10
      },
      name:{
      color:"white",
      fontSize:18,
      paddingBottom:8
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

    }

})