import { createContext, useContext, useState } from "react";
import instance from "../config/axios";


const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {

    const [news, SetNews] = useState([]);
    const [loading, SetLoading] = useState(false)

    const fetchNews = async (url= "/everything?q=india") => {
        SetLoading(true)
        try {
            const response = await instance.get(`${url}&apikey=${import.meta.env.VITE_API_KEY}`)
            SetLoading(false);
            return response.data;
        } catch (error) {
            console.log(error)
            SetLoading(false);
        }
    }


    const value = {
        news,
        SetNews,
        fetchNews,
        loading
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