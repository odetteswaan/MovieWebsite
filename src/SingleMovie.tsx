import { useParams } from "react-router-dom"

const SingleMovie = () => {
    const {id}=useParams()
  return (
    <div>One Single Movie {id}</div>
  )
}

export default SingleMovie