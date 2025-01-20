export default function ButtonLink({href, children}){
    return(
        <a href={href} className="text-black text-4xl font-bold p-4">
            {children}
        </a>
    )
}