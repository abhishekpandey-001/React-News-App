import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext'

const Category = () => {

    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

    const { SetNews, fetchNews } = useNewsContext();

    const handleClick = async (e) => {
        const cat = e.target.value;
        const data = await fetchNews(`/everything?q=${cat}`)
        SetNews(data.articles)
    }



    return (
        <div className='sticky top-16 z-10 bg-base-200 mb-8'>
            <Wrapper>
                <div className='flex flex-wrap justify-center gap-5 px-2.5 py-7 max-[280px]:gap-1.5'>
                    {
                        categories.map((butns) => {
                            return (
                                <button key={butns} className="btn btn-outline btn-accent max-[280px]:text-[12px]"
                                onClick={handleClick}
                                value={butns}
                                >{butns}</button>
                            )
                        })
                    }
                </div>
            </Wrapper>
        </div>
    )
}

export default Category
