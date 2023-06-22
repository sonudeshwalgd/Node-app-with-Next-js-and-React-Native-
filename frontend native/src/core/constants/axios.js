import axios  from "axios";

export const axiosInstance=axios.create({
    baseURL:"http://10.0.2.2:5500/",
    headers:{"Content-Type":"application/json"}

})
export const axiosInstance2=axios.create({
    baseURL:"http://10.0.2.2:5500/",
    headers: {
        "Content-Type": "multipart/form-data",
      },

})