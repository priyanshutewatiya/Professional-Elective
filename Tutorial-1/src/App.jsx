import './App.css';
import Header from './components/header.jsx'
import Registeration from'./components/Registeration.jsx'

const y = [2022,3445]

const obj = {
  name : "Priyanshu",
  course : "B.Tech"
}

function App() {
  return (
    <div>
      <Header title="My first App"/>  
      <Registeration title ={obj}/>
    <h1>Hello Kiet </h1>
    <h2>Priyanshu</h2>
    </div>
  )   
}
export default App  