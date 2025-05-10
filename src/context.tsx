import axios from 'axios';
import React,{useContext, useEffect, useState} from 'react'
import { baseUrl } from './baseUrl';


const AppContext=React.createContext<any|undefined>(undefined);
type MyProviderProps={
    children:React.ReactNode
}
type MovieType={
Poster: string;
Title: string
Type: string
Year: string
imdbID: string
}

const AppProvider:React.FC<MyProviderProps>=({children})=>{
    const[movies,setMovies]=useState<any|null>(null)
    const[isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState({show:false,msg:''})
    useEffect(()=>{
axios.get(baseUrl+'&s=titanic').then(res=>{
    if(res.data.Response==="True"){
       
        setMovies(res.data.Search)
        setIsLoading(false)
    }
    else{
        setIsError({show:true,msg:'error'})
    }
}).catch()
    },[])
    console.log(movies)
return(
    <AppContext.Provider value={{movies:movies,isLoading:isLoading,isError:isError}}>
        {children}
        </AppContext.Provider>
)
}
const GlobalContext=()=>{
return useContext(AppContext)
}
export { AppContext,AppProvider,GlobalContext}