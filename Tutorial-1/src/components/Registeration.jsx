export default function Registertion(props){
    return(
        <>
        <form action="onSubmit">
            <label>{props.title.name} : </label>
            <input type="text" placeholder="your name"/>
            
        </form>
        </>
    )
}