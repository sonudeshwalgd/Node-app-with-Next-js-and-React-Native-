import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {axiosInstance, axiosInstance2} from "./../../../../core/constants/axios.js"
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import mime from "mime"
import { useSelector } from 'react-redux';


export default function AddPost() {

const [title,setTitle]=useState()
const [description,setDescription]=useState()
const [image,setimage]=useState()
const {name}=useSelector(auth=>auth.auth)


const pickImage = async () => {
  let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
  });
  if (!image.canceled) {
      submitPostHandler(image)
  }
}

const submitPostHandler=async(image)=>{

  const payload=new FormData()
  payload.append("image",{
    uri:image.assets[0].uri,
    type:mime.getType(image.assets[0].uri),
    name:image.assets[0].uri.split("/").pop(),
  
  })
  payload.append("description",description)
  payload.append("title",title)
  payload.append("userName",name)


 return axiosInstance2.post("/post/add",payload).then((response) => {
  if (response?.status == 200) {

  }
}).catch((error) => {
  console.log(error)
})
}

  return (
    <View style={style.main}>
      <Text style={style.inputTitle}>Enter title</Text>
        <TextInput placeholder='Title' style={style.input} value={title} onChangeText={setTitle} />
      <Text style={style.inputTitle}>Enter description</Text>
        <TextInput placeholder='Description' style={style.input} value={description} onChangeText={setDescription} />
        <Button onPress={pickImage} title="Add Image and Post"/>
    </View>
  )
}

const style=StyleSheet.create({
  main:{
    backgroundColor:"black",
    paddingTop:30,
  },
  input:{
    borderWidth:1,
    borderColor:"white",
    marginBottom:20,
    color:"white"
  },
  inputTitle:{
    color:"white"
  }
})