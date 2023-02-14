import Names from "./composants/RegisterForm/Names"
import Emailuser from "./composants/RegisterForm/Emailuser"
import Password from "./composants/RegisterForm/Password"
import Home from "./composants/Home";

function App() {
  return (
    
     <div className="Navbar">

      <div className="content"> 
        <Home />

        <Names />
      <Emailuser />
      <Password />

        </div> 
        <div className="bg">

        </div>
        

        </div>
  ) 
}
export default App
