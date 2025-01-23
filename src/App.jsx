
import './App.css'

const Greeting=({name})=>{ // Destructuring props inside functional component's parameters

return <h1>Hi {name}</h1>
}
const IndianGreeting=({name})=>{
return <h1>Namaste {name}</h1>
}
function Parent({children}){// Passing Multiple Children as Props
  return(
    <div style={{padding:"1rem",backgroundColor:"grey",color:"white"}}>
     <p> Hi,I am parent!</p>
     <p>This is my first Child</p>
     <p>{children[0]}</p>  
     <p>This is my second child.</p>
     <p>{children[1]}</p>
    </div>
  )
}
function App() {


  return (
    <>
     <Greeting name="React Learner"/>
     <IndianGreeting name="React Learner"/>
    <Parent>
    <Greeting name="Karan"/>
      <IndianGreeting name="Bharti"/> 
      </Parent>     
    </>
  )
}

export default App
