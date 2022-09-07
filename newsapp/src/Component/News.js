import React,{useState,useEffect} from 'react';
import NewsItem from './NewsItem';
import './news.css';
import Sppinner from './Sppinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function News(props) {
    let [articles,setArticles]=useState([])
    let [page,setpage]=useState(1)
    let [totalResults,setTotalResults]=useState(0)
    let [loading,setloading]=useState(false)

    


  
const key =process.env.REACT_APP_API_KEY
   

    async function getData(){
        setloading(true)
        let url=`http://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${key}`
        let data =await fetch(url);
        let res=await data.json();
        console.log(res)
        setTotalResults(res.totalResults)
        setArticles(res.articles)
        setloading(false)
    }

    const fetchMoreData = async () => {   
       
        const url = `http://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${key}&page=${page+1}`;
        setpage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
       
      };

    useEffect(() => {
        
        getData(); 
        // eslint-disable-next-line
    }, [])
    
  return (
    <div className='container'>
        <h3 style={{
            textTransform:"capitalize"
        }}> {props.category} Headlines</h3>
       
       {loading && <Sppinner/>}


         <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    // loader={<Spinner/>}
                > 
        <div className='newsCont'>
                {articles.map((ele)=>{
                    return <NewsItem key={ele.url} tittle={ele.title} des={ele.description} url={ele.urlToImage} hr={ele.url} cast={ele.source.name}/>
                })}
        
        
        </div> 
        </InfiniteScroll>
      
        
      </div>
  )
}
