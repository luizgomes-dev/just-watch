import { useState, useEffect } from 'react'
import CardMovie from '../Card'

function ListMovies() {

  const [list, setList] = useState([]);

  useEffect( () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    fetch('https://api.themoviedb.org/3/movie/popular',{
      headers: {'Authorization': `Bearer ${apiKey}`}
    }).then( (data) => {
      
      data.json()
        .then(json => setList(json.results))
         
    }).catch( err => { console.log(err) })

  }, [])

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}} >
      {
        list.map( movie => {
          return (
            <CardMovie key={movie.id} movie={movie} />
          )
        })
      }
    </div>
  )

}

export default ListMovies;