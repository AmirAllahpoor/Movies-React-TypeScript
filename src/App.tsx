import RenderMovies from "./components/render-movies"
import { MovieProps } from "./components/render-movies/components/movies"
import WitcherPic from "./assets/witcher.jpg"
import FastAndFuriousPic from "./assets/SariKhashen.jpg"
import TheLastOfUsPic from "./assets/thelastofus.jpg"
import JumanjiPic from "./assets/jumanji.jpg"
import PreyPic from "./assets/prey.jpg"
import ReacherPic from "./assets/reacher.jpg"

function App() {

  const movieslist : MovieProps[] = [
    {id:1 , rating : 4.5, title : "The Witcher Series 2019" , picture : WitcherPic,},
    {id:2 , rating : 4.4, title : "Fast & Furious 7" , picture : FastAndFuriousPic,},
    {id:3 , rating : 4.2, title : "The Last Of Us 1" , picture : TheLastOfUsPic,},
    {id:4 , rating : 3.9, title : "Jumanji The Next Level" , picture : JumanjiPic,},
    {id:5 , rating : 5.0, title : "Prey 2022" , picture : PreyPic,},
    {id:6 , rating : 4.9, title : "Reacher 2022" , picture : ReacherPic,},
  ]

  return (
    <RenderMovies movies={movieslist}/>
  )
}

export default App
