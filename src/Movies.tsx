import { NavLink } from "react-router-dom";
import { GlobalContext } from "./context"

type MovieType={
Poster: string;
Title: string
Type: string
Year: string
imdbID: string
}
const Movies = () => {


const {isLoading,movies}=GlobalContext()
if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  return (
   <>
   <section className="movie-page">
    <div className="container grid grid-4-col">

{movies.map((i:MovieType)=>(
<NavLink to={`movie/${i.imdbID}`}>
<div className="card">
  <div className="card-info">
    <h2>{i.Title}</h2>
    <img src={i.Poster} alt={i.Title} />
  </div>
</div>

</NavLink>
))}
    </div>
   </section>
   </>

  )
}

export default Movies