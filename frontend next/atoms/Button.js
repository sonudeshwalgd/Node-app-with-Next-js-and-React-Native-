
import React from 'react'


export default function Button({title="",type="button", click=()=>null}) {
  return (
    <>
        <button type={type}  onClick={()=>click()}>{title}</button>
    </>
  )
}
