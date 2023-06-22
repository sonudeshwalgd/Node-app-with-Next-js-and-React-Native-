import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import PostCard from '../../../core/common/postCard'
import post from "./../../../../assets/homepage/dashboard/post.jpg"


export default function Post() {
  return (
    <>
    <ScrollView style={style.main}>
      <View style={style.wrapper}>
        <PostCard image={post} title="Sonu Deshwal" date="12 Aug , 23" description="Notes for the upcoming exams" /> 
      </View>
      <View style={style.wrapper}>
        <PostCard image={post} title="Sonu Deshwal" date="12 Aug , 23" description="Notes for the upcoming exams" /> 
      </View>
      <View style={style.wrapper}>
        <PostCard image={post} title="Sonu Deshwal" date="12 Aug , 23" description="Notes for the upcoming exams" /> 
      </View>
      <View style={style.wrapper}>
        <PostCard image={post} title="Sonu Deshwal" date="12 Aug , 23" description="Notes for the upcoming exams" /> 
      </View>

    </ScrollView>
    </>
  )
}

const style=StyleSheet.create({
main:{
  backgroundColor:"black",
  paddingTop:30,
  

},
wrapper:{
  marginBottom:20
}



})