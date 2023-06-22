import { View, Text, Pressable, StyleSheet, Image ,useWindowDimensions} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function LineButton({navigation,title,image,route}) {
  return (
    <View style={style.wrapper}>
      <View style={style.button} >
          <AntDesign name={image} size={32} color="white" />
          <Text style={style.text}>{title}</Text>  
      </View>
    </View>
  )
}

const style=StyleSheet.create({

    wrapper:{
        borderColor:"white",
      },
      button:{
      flexDirection:"column",
      alignItems:"center",
    },
    image:{
      resizeMode:"cover",
      width:80,
      height:80,
      borderRadius:40
    },
    text:{
      color:"white",
        fontSize:12,
        paddingTop:6

    }


})