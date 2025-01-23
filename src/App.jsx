
import './App.css'

const Greeting=({name})=>{// Destructuring props inside functional component's parameters

return <h1>Hi {name}</h1>
}
const IndianGreeting=({name})=>{
return <h1>Namaste {name}</h1>
}
function App() {


  return (
    <>
     <Greeting name="React Learner"/>
     <IndianGreeting name="React Learner"/>
    
    </>
  )
}

export default App
