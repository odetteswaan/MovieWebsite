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
if(isLoading){
  return <p>loading please wait</p>
}
  return (
   <>
{movies.map((i:MovieType)=>(
  <h1 key={i.imdbID}>{i.Title}</h1>
))}
   </>

  )
}

export default Movies