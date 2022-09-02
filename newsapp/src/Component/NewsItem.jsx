import React from 'react'

const NewsItem = (props) =>{
        let { tittle,url,hr,cast} = props;
        return (
            <div className="card my-3 mx-3"  >
               <span   style={{
                backgroundColor:"red",

               }} className="badge text-bg-dark">{props.cast}</span>
                  <img src={!url?"https://finbold.com/app/uploads/2022/06/Bitcoin-10k-scenario-in-play-as-BTC-slumps-below-19k-extending-losses.jpg":url} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title">{tittle}</p>
           
              <a rel="noopener noreferrer" href={hr} target="_blank" className="btn btn-primary">Read more</a>
            </div>
            
            </div>
            
        )
    }


export default NewsItem