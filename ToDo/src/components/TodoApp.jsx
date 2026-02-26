export function ToDo(){
    function handleClick(){
        alert("Button Clicked")
    }
    return(
        <>
        <h1>Event Handling</h1>
        <button onClick={handleClick}>Click Me</button>
        </>
    )
}