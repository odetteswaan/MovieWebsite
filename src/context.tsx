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
    const[movies,setMovies]=useState<MovieType|null>(null)
    const[isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState({show:false,msg:''})
    const[query,setQuery]=useState('titanic')
    useEffect(()=>{
    const timeOut =setTimeout(()=>{

            axios.get(baseUrl+`&s=${query}`).then(res=>{
                if(res.data.Response==="True"){
                   
                    setMovies(res.data.Search)
                    setIsLoading(false)
                    setIsError({show:false,msg:""})
                }
                else{
                    setIsError({show:true,msg:res.data.Error})
                    setIsLoading(true)
                }
            }).catch()
        },800)
        return ()=>clearTimeout(timeOut)
        
    },[query])
return(
    <AppContext.Provider value={{movies:movies,isLoading:isLoading,isError:isError,query:query,setQuery:setQuery}}>
        {children}
        </AppContext.Provider>
)
}
const GlobalContext=()=>{
return useContext(AppContext)
}
export { AppContext,AppProvider,GlobalContext}