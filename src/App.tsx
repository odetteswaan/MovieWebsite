import Home from "./Home"
import {Routes,Route } from "react-router-dom"
import SingleMovie from "./SingleMovie"
import Error from "./Error"
import "./App.css"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App
