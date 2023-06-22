import { axiosInstanceLocal } from "@/core/constant/axios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function StaffList(staff) {
  const deleteStaff = async (staff_ID) => {
    axiosInstanceLocal.delete(`/api/admin/delete-staff?staff_ID=${staff_ID}`);
  };

  return (
    <>
      <Wrapper>
        <div className="summaryDiv student">
          <p>{staff?.name}</p>
          <p>{staff?.email}</p>
          <p>{staff?.number}</p>
          <button
            style={{
              border: "1px solid red",
              background: "white",
              color: "red",
            }}
            className="deletebutton"
            onClick={() => deleteStaff(staff._id)}
          >
            delete
          </button>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  max-width: 800px;
  h3 {
    padding: 8px;
  }
  ul {
    list-style: none;
  }
  .summaryDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    .deletebutton {
      padding: 4px 12px;
      background-color: red;
      border-radius: 4px;
      border: none;
      outline: none;
      color: white;
      cursor: pointer;
    }
  }

  .sectionUl {
    padding: 8px 20px;
  }
  .studentUl {
    padding: 8px 20px;
  }
  .student {
    padding: 10px;
  }
`;
