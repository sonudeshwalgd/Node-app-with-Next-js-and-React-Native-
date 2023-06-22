'use client';


import Button from '@/atoms/Button'
import {H1} from '@/atoms/Headings'
import Input from '@/atoms/input'
import { userModel } from '@/models/admin'
import { mongodb } from '@/utils/connectDB'
import axios from 'axios'
import React, { useState } from 'react'
import { axiosInstance } from '../constant/axios'
import { useRouter } from 'next/navigation'
import styled from 'styled-components';
export default function LoginFormPage() {
    const [loginpage,setLoginPage]=useState(true)
    const router = useRouter();


    const registerHandler=async ()=>{
        event.preventDefault()
        const payload =new FormData(event.target)
        axiosInstance.post("/auth/register",payload).then(( )=>{router.push('/dashboard')})
      
    }
    const loginHandler=async ()=>{
        event.preventDefault()
        const payload =new FormData(event.target)
        axiosInstance.post("/auth/login",payload).then(()=>{router.push('/dashboard')})
      
    }

  return (
    <>
    {loginpage?
    <Wrapper>
        <h1>Register</h1>
        <form onSubmit={registerHandler}>
            <input name="name" placeholder='name' />
            <input name="email" placeholder='email' />
            <input name="password" placeholder='password' />
            <button className='submit' >Submit</button> 
            <button className='add' type='button' onClick={()=>setLoginPage(false)}>Already have account , Login</button>
        </form>
    </Wrapper>
        :
        <Wrapper>
    <h1>Login</h1>
    <form onSubmit={loginHandler}>
        <input name="email" placeholder='email' />
        <input name="password" placeholder='password' />
        <button className='submit'>Submit</button> 
        <button type='button' className='add' onClick={()=>setLoginPage(true)}>Don't have , Register</button>
    </form>
        
    </Wrapper>
            
            }
    </>
  )
}


const Wrapper=styled.div`
h1{
    display: block;
    margin: auto;
    text-align: center;
    margin: 40px;
}
form{
    display: flex;
    max-width: 500px;
    margin: auto;
    flex-direction: column;
    gap: 20px;
    margin-bottom:50px ;
    input{
        padding: 6px 20px;
        border-radius: 8px;
        border: 2px solid black;
        ::placeholder{
            color: black;
        }
    }
    button{
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 18px;
        
    }
    .submit{
        border: 2px solid black;
        background-color: grey;
        color: white;
    }
    .add{
        border: none;
        outline: none;
    }
}


`