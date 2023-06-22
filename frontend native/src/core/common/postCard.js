import { View, Text, Image, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useEffect } from 'react'

const dimension=Dimensions.get("window")
export default function PostCard({image,title,date,description,name}) {

  return (
    <View style={style.main}>
      <View style={style.top}>

      <View style={style.wrapper}>

      <View style={style.imageWrapper}>
        <Image style={style.image} source={{uri:image}}/>
      </View>
      <View style={style.detailWrapper}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.date}>{date}</Text>
      </View>
      </View>

      <View style={style.download}> 
      <AntDesign name="ellipsis1" size={24} color="white" />
      </View>
      </View>
      <View style={style.bottom}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.description}>{description}</Text>
          
          <Image style={style.postImage} source={{uri:image}}/>
      </View>

    </View>
  )
}

const style=StyleSheet.create({
  main:{
    display:"flex",
    flexDirection:"column",
    borderRadius:4,
    width:"100%",
    marginVertical:10
  },
  top:{
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:8,
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
  name:{
    color:'white',
    fontSize:14,
    
  },
  date:{
    color:'white',
    fontSize:10,
    
  },
  
  bottom:{
  },
  title:{
    color:'white',
    fontSize:14,
    paddingLeft:12,
    paddingBottom:12,

  },
  description:{
    color:'white',
    fontSize:12,
    paddingLeft:12,
    paddingBottom:12,

  },
  postImage:{
    width:dimension.width,
    height:250,
    margin:0,
    padding:0,
    marginTop:0,
    
  }

})