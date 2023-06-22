'use client'

import { axiosInstance, axiosInstanceLocal } from '@/core/constant/axios'
import React, { useState } from 'react'
import styled from 'styled-components'

export default function AddDepartment() {
  const addDepartmentHandler=()=>{
    event.preventDefault()
    const payload=new FormData(event.target)
    axiosInstanceLocal.post("/api/admin/department",payload).then((res)=>console.log(res.data))
  }
  const [sectionCount,setSectionCount]=useState([{students:1}])
  return (
    <>
    <Wrapper>

    <h1>Add Department by filling details</h1>
    <div>
      <form onSubmit={addDepartmentHandler}>
        <div className='dep_div'>
          <div className="div_name_input">

        <h4 className='dep_name'>Department name</h4>
        <input className='dep_input' name="department[0]title"/>
          </div>
        </div>
        {
          new Array(sectionCount.length).fill("").map((_,index)=>{
            return (
              <>
                    <div className='div_sec' key={index}>
                      <div className='div_name_input'>

                      <h4 className='sec_name'>Sections name</h4>
                      <input className='sec_input' name={`department[0]section[${index}]sectionTitle`}/>
                      </div>
                      
                      {
                        new Array(sectionCount[index].students).fill("").map((_,index2)=>{
                          return (
                            <div className='div_name_input' key={index2}>
                              <h4 className='stu_name'>Students : </h4>
                            <input placeholder='Name' className='stu_input' name={`department[0]section[${index}]StudentList[${index2}]name`}/>
                            <input placeholder='Email' className='stu_input' name={`department[0]section[${index}]StudentList[${index2}]email`}/>
                            <input placeholder='Number' className='stu_input' name={`department[0]section[${index}]StudentList[${index2}]number`}/>
                            </div>
                          )
                        })
                      }
                    <button type='button' onClick={()=>{setSectionCount(()=>{
                      sectionCount[index].students++
                      let newData=[...sectionCount]
                      return newData
                    })}}>Add Student</button>
                    </div>
              </>
              )
            })
          }
          <button type='button' onClick={()=>setSectionCount(section=>[...section,{students:1}])}>Add Section</button>
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
