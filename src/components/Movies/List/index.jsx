import { useState, useEffect } from 'react'
import CardMovie from '../Card'

function ListMovies() {

  const [list, setList] = useState([]);

  useEffect( () => {
    
    fetch('https://api.themoviedb.org/3/movie/popular',{
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY3M2I0NjRhYjI4OWNmOTc2N2RmZTAwZmM5YWYxYyIsIm5iZiI6MTc4MjMzMDY0OS4wNjksInN1YiI6IjZhM2MzNTE5NGY5NjgyYTA4Yzk0OWEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LXPf5juQwXcxZDNFpG_EWw1AhwBT7n9ajSgJh1dBKDY'}
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