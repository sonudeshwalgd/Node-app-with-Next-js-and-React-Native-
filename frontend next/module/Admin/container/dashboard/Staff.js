'use client'
import React, { useEffect, useState } from 'react'
import DepartmentList from './DepartmentList'
import {axiosInstanceLocal } from '@/core/constant/axios'
import StaffList from './StaffList'



export default function Staff(){

const [staff, setStaff]=useState([])

const getStaffsDetail=async()=>{
   axiosInstanceLocal.get("/api/admin/staff").then(res=>{console.log(res.data),setStaff(res.data)})
}

useEffect(()=>{
  getStaffsDetail()
  
},[])

  return (
    <>
    { staff.map((staff)=>{
      return (
        <StaffList key={staff?._id} {...staff}/>
      )
    })}

    
    </>
  )
}
