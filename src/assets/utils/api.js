import axios from "axios"
const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_APP_API_KEY


export const fetchDataFromApi = async (url)=>{
    const {data} = await axios.get(BASE_URL  + url  + API_KEY)
    return data
    // console.log(data)

}