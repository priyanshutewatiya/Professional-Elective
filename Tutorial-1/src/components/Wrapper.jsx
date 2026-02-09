import './wrapper.css'
export function Wrapper({title, children}){
    return(
        <div className="div1">
            <h2>{title}</h2>
            <div>
                {children}
            </div>
        </div>
    )
}