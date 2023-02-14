import NavbarSignUp from './navbar/navbar-singup';
import NavbarHome from './navbar/navbarHome';
import NavbarSignIn from './navbar/navbar-singin';

import Names from "./composants/RegisterForm/Names"
import Emailuser from "./composants/RegisterForm/Emailuser"
import Password from "./composants/RegisterForm/Password"
import Home from "./composants/Home";

function App() {
  return (



    <div className="App">
      <NavbarSignUp/>
      <NavbarSignIn/>
       <NavbarHome />
      <div className="content">

    
     <div className="Navbar">

      <div className="content"> 
        <Home />

    <h1 className="text-3xl font-bold underline">
            <p> Hello world! {title}</p> 


      
    </h1>
    </div>
    </div>

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
