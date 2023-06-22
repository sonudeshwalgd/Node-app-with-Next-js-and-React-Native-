import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function ClickNotes({image,title,date,description}) {
  return (
    <View style={style.main}>
      <View style={style.wrapper}>

      <View style={style.imageWrapper}>
        <Image style={style.image} source={image}/>
      </View>
      <View style={style.detailWrapper}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.date}>{date}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
      </View>

      <View style={style.download}> 
      <AntDesign name="download" size={24} color="white" />
      </View>
    </View>
  )
}

const style=StyleSheet.create({
  main:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    borderColor:"white",
    borderWidth:1,
    padding:4,
    borderRadius:4
  },
  wrapper:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
  },
  imageWrapper:{

  },
  image:{
    height:50,
    width:50,
    borderRadius:25,
    marginRight:12
  },
  detailWrapper:{
  },
  title:{
    color:'white',
    fontSize:14,
    
  },
  date:{
    color:'white',
    fontSize:10,
    
  },
  description:{
    color:'white',
    fontSize:12,

  },
  download:{
    
  }

})