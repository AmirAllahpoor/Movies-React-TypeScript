
import Rating from "./components/rating";
import Title from "./components/title";

export interface MovieProps{
    id: number;
    picture : string;
    title : string;
    rating : number;
} 

const Movies = ({picture , title , rating} : MovieProps) => {

    return ( 
     
      <div className="bg-[#111827] w-72 h-70 shadow-lg shadow-zinc-400 rounded-xl dark:bg-zinc-200 dark:shadow-none transition-all duration-[1s]">
        <div className="w-full">
        <img src={picture} alt="imgmovies" className=" object-cover rounded-t-xl" />
        </div>
        <Title >{title}</Title>
        <Rating rate={rating}/>
      </div>

     );
}
 
export default Movies;