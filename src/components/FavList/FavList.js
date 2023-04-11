import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function FavList(props){

    const [favMovies,setFavMovies ] = useState()
async function getFavMovie(){
    let url = `${process.env.REACT_APP_SERVER_URL}/getMovies`

    let response = await fetch(url,{
        method:'GET',
    })
    let recivedData = await response.json();
    setFavMovies(recivedData)
}

async function handleDelete(id){
    let url = `${process.env.REACT_APP_SERVER_URL}/deleteMovie/${id}`;
    let response = await fetch(url,{
        method: "DELETE",
    headers: {
        "content-Type": "application/json"
    },
    })
if (response.status ===204){
    getFavMovie()

//     // alert("successfully deleted")
}

}
async function handleUpdate(id,data){
    let url = `${process.env.REACT_APP_SERVER_URL}/updateMovie/${id}`;
    let response = await fetch(url,{
        method: "PUT",
    headers: {
        "content-Type": "application/json"
    },
    body: JSON.stringify(data),

    })
}

useEffect(()=>{
    getFavMovie()

    // console.log(favMovies)

},[])

return(
    <>
    <h2>this is Fav Movie Page</h2>
    {
        favMovies && favMovies.map (movie => {
             return (
    
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Button variant="primary" onClick={()=>handleDelete(movie.id)} >Delete</Button>
          <Button variant="primary" onClick={()=>handleUpdate(movie.id)} >Update</Button>

        </Card.Body>
      </Card>

      
  )
        })
    }
    </>
)
}
export default FavList;