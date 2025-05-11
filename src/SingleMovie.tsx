import { NavLink, useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"
import { baseUrl } from "./baseUrl"
const SingleMovie = () => {
  const {id}=useParams()
    const[movies,setMovies]=useState<any|null>(null)
    const[isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
    const timeOut =setTimeout(()=>{

            axios.get(baseUrl+`&i=${id}`).then(res=>{
                if(res.data.Response==="True"){
                   console.log(res.data)
                    setMovies(res.data)
                    setIsLoading(false)
                }
            }).catch()
        },800)
        return ()=>clearTimeout(timeOut)
        
    },[id])

    if(isLoading){
      return(
        <div className="movie-section">
              <div className="loading">loading...</div>
        </div>
      )
    }
  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movies.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movies.Title}</p>
          <p className="card-text">{movies.Released}</p>
          <p className="card-text">{movies.Genre}</p>
          <p className="card-text">{movies.imdbRating}</p>
          <p className="card-text">{movies.Country}</p>
          <NavLink to='/' className='back-btn'>
          Go Back
          </NavLink>
        </div>
      </div>

    </section>
  )
}

export default SingleMovie