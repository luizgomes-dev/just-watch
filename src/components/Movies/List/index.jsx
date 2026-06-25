import { useState, useEffect } from 'react'

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
    <>
      {
        list.map( movie => {
          return (
            <div id={movie.id}>            
              <h3>{movie.title}</h3>
              <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
            </div>)
        })
      }
    </>
  )

}

export default ListMovies;