'use client'
import Dashboard from '@/module/Admin/pages/Dashboard'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DashboardMain() {
  const router=useRouter()
  return (
    <>
    <Dashboard/>
    {/* <div>Dashboard</div>
    <button onClick={()=>router.push("/")}>logout</button> */}
    </>
  )
}
