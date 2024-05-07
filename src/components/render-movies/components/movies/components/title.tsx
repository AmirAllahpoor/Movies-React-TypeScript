export interface TitleProps {
    children : string
}

const Title = ({children} : TitleProps) => {
    return ( 
        <h1 className="font-sans font-semibold text-xl mt-3 px-4 text-zinc-200 dark:text-[#111827] transition-all duration-[1s]">{children}</h1>
     );
}
 
export default Title;