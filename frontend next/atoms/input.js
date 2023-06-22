"use client"


import React, { useEffect, useState } from 'react'

export default function Input({placeHolder="Enter Value",value="",change=()=>null}) {



  return (
    <>
        <input placeholder={placeHolder}  value={value}  onChange={()=>change(event.tagrget.value)}/>
    
    </>
  )
}
