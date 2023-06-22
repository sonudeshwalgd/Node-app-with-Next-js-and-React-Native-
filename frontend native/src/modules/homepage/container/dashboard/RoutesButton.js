import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import LineButton from '../../../../core/common/lineButton'
import logo from "./../../../../../assets/homepage/dashboard/logo.jpg"
import { logout } from '../../../../store/homeModule/slices/LoginSignupSlice/LoginSignupLogoutSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function RoutesButton(navigation) {
const dispatch=useDispatch()
const {role}=useSelector(state=>state.auth)
console.log(role)


  const logoutHandler=()=>{
    dispatch(logout({token:'false'}))

}
  return (
    <>
    <View>
    <View  style={style.main}>

    <View style={style.wrapper}>
        {role=="staff" && <TouchableOpacity style={style.buttonWrapper} onPress={()=>navigation.navigate("TakeAttendaceStack")}>
             <LineButton title="Attendance" image="calendar" route="attendance"/>
        </TouchableOpacity>}
        <TouchableOpacity style={style.buttonWrapper}>
             <LineButton title="Setting" image="setting" route="attendance"/>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonWrapper}>
             <LineButton title="Notification" image="notification" route="attendance"/>
        </TouchableOpacity>
          {role=="staff" && <TouchableOpacity style={style.buttonWrapper} onPress={()=>navigation.navigate("AddEditPostStack")}>
             <LineButton title="Add Post" image="pay-circle-o1" route="attendance"/>
        </TouchableOpacity>}
          {role=="student" && <TouchableOpacity style={style.buttonWrapper} >
             <LineButton title="Payment" image="pay-circle-o1" route="attendance"/>
        </TouchableOpacity>}
        <TouchableOpacity style={style.buttonWrapper}  >
             <LineButton title="Reminder"  image="bells" route="attendance"/>
        </TouchableOpacity>
        <TouchableOpacity   style={style.buttonWrapper} >
             <LineButton title="Chat" image="message1" route="attendance"/>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonWrapper} >
             <LineButton title="File Manager" image="file1" route="attendance"/>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonWrapper} onPress={logoutHandler}>
             <LineButton title="Logout" image="logout"  route="attendance"/>
        </TouchableOpacity>

    </View>



    </View>
    </View>
    </>
  )
}

const style=StyleSheet.create({
    main:{
      marginTop:40,
    },
    wrapper:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingVertical:10,
        flexWrap:"wrap"
    },
    buttonWrapper:{
        height:80,
        width:80,
        position:"relative",
    }
})