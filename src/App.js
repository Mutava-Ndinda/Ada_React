import Login from "./Login"
import Users from "./Users"
import About from "./About"

// export const Introduction=()=>{
//   return(
//     <h1>Adalab</h1>
//   )
// }


const App = () =>{
  return(
    <div>
      <About/>
    <Login/>
    <Users/>
    </div>
  )
}
export default App;