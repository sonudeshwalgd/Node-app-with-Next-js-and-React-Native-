import { View, Text, ScrollView, StyleSheet, Button } from 'react-native'
import React from 'react'
import PostCard from '../../../../core/common/postCard'
// import post from "./../../../../../assets/homepage/dashboard/post.jpg"
import { useEffect } from 'react'
import { axiosInstance } from '../../../../core/constants/axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useIsFocused } from '@react-navigation/native'



export default function ViewPost() {

  const focus=useIsFocused()

  const [post,setPost]=useState([])
  const {name}=useSelector(state=>state.auth)

const getOldPosts =()=>{
axiosInstance.post("/post/get",{userName:name}).then((res)=>{
  setPost(res.data.data.sort())
})
}

useEffect(()=>{
  getOldPosts()
},[focus])


  return (
    <>
    <View style={style.main}>
      <View style={style.wrapper}>
        {
          post?.map((image)=>{
            return <PostCard key={image.url} image={image.url} name={image.data.userName} title={image.data.title} date={moment(image.date).format('HH:mm A')} description={image.data.description} /> 
          })
        }

      </View>
    </View>
    </>
  )
}

const style=StyleSheet.create({
main:{
  backgroundColor:"black",
  paddingTop:30,
  minHeight:"100%"
  

},
wrapper:{
  marginBottom:20
}



})