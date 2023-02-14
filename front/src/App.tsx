import NavbarSignUp from './navbar/navbar-singup';
import NavbarHome from './navbar/navbarHome';
import NavbarSignIn from './navbar/navbar-singin';

import Names from "./composants/RegisterForm/Names"
import Emailuser from "./composants/RegisterForm/Emailuser"
import Password from "./composants/RegisterForm/Password"
import Home from "./composants/Home";
import LoginUser from './composants/LoginForm/Loginuser';

function App() {
  return (


    <div className="App">
     
     <div className="Navbar">
     <NavbarSignUp/>
      <NavbarSignIn/>
       <NavbarHome />
      </div>

      <div className="content"> 
        <Home />

      <h1 className="text-3xl font-bold underline">
            <p className='text-white'> Hello world!</p> 
       </h1>
    </div>
    
      <Names />
      <Emailuser />
      <Password />
      <LoginUser />
    <div className="contentTWo">
      
    </div>
        </div> 
        

       
        

        
  ) 
}
export default App
