import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useMemo, useState } from "react";
import Movies, { MovieProps } from "./components/movies";

export interface RenderMovie {
    movies : MovieProps[]
}

const RenderMovies = ({movies} : RenderMovie) => {

    const rendermovies = useMemo(() => {
        return movies.map((movie) => {
            return <Movies {...movie} key={movie.id} />
        })
    }, [movies])

    const ThemeDark = JSON.parse(localStorage.getItem('DarkMode') ?? "false")

    const [DarkMode , SetDarkMode] = useState(false)
  
    function changeTheme(){
      SetDarkMode(!DarkMode)
      localStorage.setItem('DarkMode', JSON.stringify(DarkMode))
    }

    return ( 
        <div className={ThemeDark ?"dark dark:bg-[#111827] absolute w-screen h-screen transition-all duration-[1s]" : "bg-white absolute w-screen h-screen transition-all duration-[1s]"}>
        <button className="bg-[#111827] rounded-md w-14 h-14 m-5 flex flex-row justify-center dark:bg-zinc-200" onClick={changeTheme}> {ThemeDark ? <CiLight className="text-[#111827] text-3xl mt-3" /> : <MdDarkMode className="text-zinc-200 text-3xl mt-3"/> }</button>
        <div className="absolute top-32 w-full flex flex-wrap gap-14 px-20">
            {rendermovies}
        </div>
        </div>
        
     );
}
 
export default RenderMovies;