'use client'

import { axiosInstance, axiosInstanceLocal } from '@/core/constant/axios'
import React, { useState } from 'react'
import styled from 'styled-components'

export default function AddStaff() {
  const addDepartmentHandler=()=>{
    event.preventDefault()
    const payload=new FormData(event.target)
    axiosInstanceLocal.post("/api/admin/staff",payload).then((res)=>console.log(res.data))
  }
  const [staffCount,setStaffCount]=useState(1)
  return (
    <>
    <Wrapper>

    <h1>Add Staff by filling details</h1>
    <div>
      <form onSubmit={addDepartmentHandler}>
        {
          new Array(staffCount).fill("").map((_,index)=>{
            return (
              <div className='div_name_input' key={index}>
                <h4 className='stu_name'>Staff : </h4>
              <input placeholder='Name' className='stu_input' name={`staff[${index}]name`}/>
              <input placeholder='Email' className='stu_input' name={`staff[${index}]email`}/>
              <input placeholder='Number' className='stu_input' name={`staff[${index}]number`}/>
              </div>
            )
          })
        }


          <button type='button' onClick={()=>setStaffCount(count=>count+1)}>Add Section</button>
        <button className='submit'>Submit Department </button>
      </form>
    </div>
    </Wrapper>

    </>
  )
}

const Wrapper=styled.div`
.form {
  padding: 10px;
}
.dep_div{
  padding: 10px;
}
.div_sec{
padding: 10px 20px;
}
.div_name_input{
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin: 10px 0;
}
button{
  border: 2px solid black;
    background-color: grey;
    color: white;
  padding: 6px 12px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
  }
  input{
    padding: 6px 20px;
    border-radius: 8px;
    border: 2px solid black;
  }
  .submit{
    margin-top: 40px ;
    display: block;
    background-color: blue;
    border: none;
    font-size: 16px;
}



`
