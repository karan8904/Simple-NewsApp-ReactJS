import React from 'react'
import { useEffect, useState } from "react"
import image from "../assets/NewsIcon.jpeg"

export const NewsFeed = ({category}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        console.log(category)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url)
            .then(res => res.json())
            .then(news => setData([...news.articles]))
        console.log(data)
    }, [category])
    return (
        <div className="container mt-3">
            <h4 className='text-center'>{category==="general"?"LATEST":category.toUpperCase()} <span className='badge bg-danger'>NEWS</span></h4>
            <hr />
            <div className="row my-3">
                {data ? data.map(
                    (article, index) => (
                        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-5" key={index}>
                            <div className="card p-3" style={{ width: "18rem", minHeight:"32rem"}}>
                                <img src={article.urlToImage?article.urlToImage:image} className="card-img-top" alt="News" style={{height:"250px"}} />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title?article.title.length > 40 ? article.title.slice(0,40)+"..." : article.title:""}</h5>
                                    <p className="card-text mt-2">{article.description?article.description.length > 80 ? article.description.slice(0,80)+"..." : article.description:""}</p>
                                </div>
                                <div className='ms-auto'>
                                    <a href={article.url} className="btn btn-danger">Read Full News</a>
                                </div>
                            </div>
                        </div>
                    )
                ) : ""}

            </div>
        </div>
    )
}
