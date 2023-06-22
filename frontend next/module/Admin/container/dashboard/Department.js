'use client'
import React, { useEffect, useState } from 'react'
import DepartmentList from './DepartmentList'
import axios from 'axios'
import { axiosInstance, axiosInstanceLocal } from '@/core/constant/axios'



export default function Department() {

const [department, setDepartment]=useState([])

const getDepartmentsDetail=async()=>{
   axiosInstanceLocal.get("/api/admin/department").then(res=>{console.log(res.data),setDepartment(res.data)})
}

useEffect(()=>{
  getDepartmentsDetail()
  
},[])

  return (
    <>
    {department.length !=0 && department.map((ele)=>{
      return (
        <DepartmentList key={ele?.department?.[0]?._id} {...ele}/>
      )
    })}

    
    </>
  )
}
