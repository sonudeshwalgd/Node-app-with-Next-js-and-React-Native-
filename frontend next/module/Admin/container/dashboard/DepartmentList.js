import {  axiosInstanceLocal } from '@/core/constant/axios'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React ,{useEffect, useRef} from 'react'
import styled from 'styled-components'

export default function DepartmentList(ele) {

  const department_ID=ele?._id
  const name=ele?.department?.[0]?.title
  const section=ele?.department?.[0]?.section
  
  const deleteDepartment=async()=>{
    axiosInstanceLocal.delete(`/api/admin/delete-department?department_ID=${department_ID}`)
  }
  const deleteSection=async(section_ID)=>{
    axiosInstanceLocal.delete(`/api/admin/delete-section?department_ID=${department_ID}&section_ID=${section_ID}`)
  }
  const deleteStudent=async(section_ID,student_ID)=>{
    axiosInstanceLocal.delete(`/api/admin/delete-student?department_ID=${department_ID}&section_ID=${section_ID}&student_ID=${student_ID}`)
  }


  return (
    <>
    <Wrapper>
        <Accordion >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className='summaryDiv'>
            <h3>{name}</h3>
            <button onClick={deleteDepartment} className='deletebutton'>delete</button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        <div  className='section'>
          {section?.map((section)=>{
            return (
              <ul className='sectionUl' key={section._id}>
                <li>
                  <div>
                  <Accordion >
                    <AccordionSummary>
                    <div className='summaryDiv'>
                      <h4>{section.sectionTitle}</h4>
                      <button className='deletebutton' onClick={()=>deleteSection(section._id)}>delete</button>
                    </div>

                    </AccordionSummary>
                    <AccordionDetails>
                    <div>
                      <ul className='studentUl'>
                        <li  className='student'>
                          {section?.StudentList.map((student)=>{
                            return(
                              <div className='summaryDiv student'>
                              <p key={student._id}>{student?.name}</p>
                              <p key={student._id}>{student?.email}</p>
                              <p key={student._id}>{student?.number}</p>
                              <button style={{border:"1px solid red", background:"white", color:"red"}} className='deletebutton' onClick={()=>deleteStudent(section._id,student._id)}>delete</button>
                            </div>
                            )
                          })}
                        </li>
                      </ul>
                    </div>

                    </AccordionDetails>
                    </Accordion >
                  </div>
                </li>
              </ul>
            )
          })}
        </div>
        </AccordionDetails>
      </Accordion>
    </Wrapper>

    </>
  )
}

const Wrapper=styled.div`
border: 1px solid black;
border-radius:10px;
margin-bottom: 20px;
overflow: hidden;
max-width: 800px;
h3{
  padding: 8px;

}
ul{
  list-style: none;
}
.summaryDiv{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  .deletebutton{
    padding:4px 12px;
    background-color: red;
    border-radius: 4px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
  }

}

.sectionUl{
  padding: 8px 20px;
}
.studentUl{
  padding:8px 20px;
}
.student{
  padding: 10px;
}




`
