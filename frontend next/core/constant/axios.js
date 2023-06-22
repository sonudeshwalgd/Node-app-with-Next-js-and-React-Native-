import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:"http://localhost:5500/",
    headers:{
        "Content-Type":"application/json",
        // "Authorization":"Bearer "+ localStorage.getItem("token") 
    }
})
export const axiosInstanceLocal=axios.create({
    baseURL:"http://localhost:3000/",
    headers:{
              "Content-Type":"application/json",
            //   "Authorization":"Bearer "+ localStorage.getItem("token") 

            }
})