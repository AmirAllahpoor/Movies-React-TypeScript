import { FaStar } from "react-icons/fa"

export interface RateProps {
    rate : number;
}

function Rating ({rate} : RateProps){
    return ( 
        <div className="w-full flex flex-row my-3 px-4 ">
          <FaStar className="text-yellow-400 mt-1"/>
          <h5 className="ml-2 font-semibold text-zinc-200 dark:text-[#111827] transition-all duration-[1s]">{rate}</h5>
        </div>
     );
}
 
export default Rating;