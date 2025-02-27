import React, { useEffect, useState } from 'react';
import Footer from '../common-component/footer';
import Header from '../common-component/header';
import "../css/theLatest.css"

const apiKey = '3376efcc74594e13b3c66f49229b5a89';

function TheLatest() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const url = `https://newsapi.org/v2/everything?q=marine%20wildlife&apiKey=${apiKey}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.log('Error fetching news:', error);
            }
        };

        getNews();
    }, []);

    return (
        <>
            <Header />

            <hr />

            <div className="container">
                <h1 className="heading1">Marine Latest Report</h1>
                <ul className="card">
                    {articles.map((article, index) => (
                        <li key={index}>
                            <div className="card-main">
                                <div className="article-title">{article.title}</div>
                                <div className="article-description">{article.description}</div>
                                <div className="article-source">Source: {article.source.name}</div>
                                <Link href={article.url} target="_blank" rel="noopener noreferrer">Read more</Link>
                                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className='img-news'/>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Footer />
        </>
    );
}

export default TheLatest;