import "./Header.css"
export default function Header(props){
    return (
        <header>
        <h1> {props.title} </h1>
        <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Contact Us</a>
            <a href="#">Next webpage</a>
        </nav>
        </header>
    )
}