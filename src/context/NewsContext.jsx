import { createContext, useContext, useState } from "react";
import instance from "../config/axios";


const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {

    const [news, SetNews] = useState([]);

    const fetchNews = async (url= "/everything?q=india") => {
        try {
            const response = await instance.get(`${url}&apikey=${import.meta.env.VITE_API_KEY}`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }


    const value = {
        news,
        SetNews,
        fetchNews
    }

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const useNewsContext = () => {
    return (
        useContext(NewsContext)
    )
}

export { useNewsContext, NewsContextProvider };