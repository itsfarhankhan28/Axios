import { useState , useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [movies , setMovies] = useState([])

  const getApiData = async()=>{
    const moviesdata = await axios.get('https://movies-api-w8rc.onrender.com/movies')
    console.log(moviesdata.data)
    setMovies(moviesdata.data)
  }
  
  useEffect(()=>{
    getApiData()
  },[])
  return (
    <>
      <div className='container'>
      <div className='cards'>
      {movies.map((items)=>{
        return(
          <div className='moviecard'>
            <h1>{items.name}</h1>
            <h2>{items.actors}</h2>
            <h3>{items.description}</h3>
          </div>
        )
      })}
      </div>
      </div>
    </>
  )
}

export default App
