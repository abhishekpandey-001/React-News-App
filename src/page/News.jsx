import { useEffect } from 'react';
import Wrapper from '../components/Wrapper'
import { useNewsContext } from '../context/NewsContext'

const News = () => {

    const { news, SetNews, fetchNews } = useNewsContext();

    //load data on initial render
    useEffect(() => {
        (async () => {
            const data = await fetchNews()
            SetNews(data.articles)
        })()
    }, [])




    return (
        <Wrapper>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-2.5 pb-10'>
                {news.map((newsDetails, index) => {
                    if(!newsDetails.urlToImage) return null;
                    return (
                        <NewsCard details={newsDetails} key={index} />
                    )
                })}
            </div>
        </Wrapper>
    )
}

const NewsCard = ({ details }) => {
    return (
        <div className="card bg-base-300 shadow-sm">
            <figure>
                <img
                className='w-full aspect-video object-contain'
                    src={details?.urlToImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-2">{details?.title}</h2>
                <p className='line-clamp-3'>{details?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn-info btn btn-soft mt-5" onClick={() => (window.open(details.url))}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default News
