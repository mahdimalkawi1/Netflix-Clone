import { useEffect, useState } from "react";

function FavList(){

    const [favMovies,setFavMovies ] = useState()
async function getFavMovie(){
    let url = `${process.env.REACT_APP_SERVER_URL}/favorite`

    let response = await fetch(url,{
        method:'GET',
    })
    let recivedData = await response.json();
    setFavMovies(recivedData)
}
useEffect(()=>{
    getFavMovie()

    console.log(favMovies)

},[])

return(
    <>
    <h2>this is Fav Movie Page</h2>
    {
        favMovies && favMovies.map(movie=>{
             return (
    
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Button variant="primary" >hello</Button>
        </Card.Body>
      </Card>

      
  )
        })
    }
    </>
)
}
export default FavList;