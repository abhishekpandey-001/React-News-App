import React from 'react'
import Wrapper from './Wrapper'

const Category = () => {

    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
    return (
        <Wrapper>
            <div className='flex flex-wrap justify-center gap-5 px-2.5 py-7 max-[280px]:gap-1.5'>
                {
                    categories.map((butns)=>{
                        return(
                            <button key={butns} className="btn btn-outline btn-accent max-[280px]:text-[12px]">{butns}</button>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Category
