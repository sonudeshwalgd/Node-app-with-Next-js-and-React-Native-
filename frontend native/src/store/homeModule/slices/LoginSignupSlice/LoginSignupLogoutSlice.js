import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosInstance } from "../../../../core/constants/axios";

export const login = createAsyncThunk(
   "login",
   async data => {
           console.log("login--------------")
           console.log(data)
           const res= await axiosInstance.post("/auth/studentLogin",data)
           await AsyncStorage.setItem("user",JSON.stringify(res.data))
           return res.data
         }
      );
         

 export const signup=createAsyncThunk(
   "signup",
   async data=>{
      console.log("signup--------------")
      console.log(data)
      return await axiosInstance.post("/auth/studentSignup",data).then(res=>data)
       
   }
 ) 
 export const verifyOTP=createAsyncThunk(
   "studentOTPSent",
   async data=>{
      console.log("studentOTPSent--------------")
      console.log(data)
      const res= await axiosInstance.post("/auth/studentOTPSent",data)
      return res.data
   }
 ) 
 export const setPassword=createAsyncThunk(
   "setPassword",
   async data=>{
      console.log("setPassword--------------")
      console.log(data)
      const res= await axiosInstance.post("/auth/studentSetPassword",data)
      return res.data
   }
 ) 
 export const getUserData=createAsyncThunk(
   "getUserData",
   async data=>{
      console.log("getUserData--------------")
      console.log(data)
      const res= await axiosInstance.post("/auth/studentSetPassword",data)
      return res.data
   }
 ) 

 export const logout=createAsyncThunk(
   "logout",
   async ()=>{
      console.log("logout")
      const res= await axiosInstance.get("/auth/logout")
      return res.data
   }
 )

const slice=createSlice({
    name:'auth',
    initialState:{
      token :"",
      name:"",
      email:"",
      number:"",
      role:"",
      data:[]
    },
    extraReducers:{
       [login.fulfilled] :(state,{payload})=>{
          state.token=payload.token,
          state.name=payload.data.name,
          state.email=payload.data.email,
          state.number=payload.data.number,
          state.role=payload.data.role

         } ,
         [signup.fulfilled]:(state,{payload})=>{
            state.name=payload.name,
            state.email=payload.email,
            state.number=payload.number
         } ,
         [verifyOTP.fulfilled]:()=>{
            // state.token=payload.token
         },  
         [setPassword.fulfilled]:()=>{
            // state.token=payload.token
         },  
         [logout.fulfilled]:(state,action)=>{
            console.log("logout")
               state.token=null
               state.name=null
               state.email=null
               state.number=null
               state.role=null
         },
      },
         
    reducers:{
         setToken(state,action){
            console.log(action.payload)
            const user=JSON.parse(action.payload)
            state.token=user.token
            state.name=user.data.name
            state.email=user.data.email
            state.number=user.data.number
            state.role=user.data.role
         }
    }
})

export const {setToken}=slice.actions
export default slice.reducer
