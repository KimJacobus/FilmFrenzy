import NavbarSignUp from './composants/navbar/NavbarSingUp';
import NavbarSignIn from './composants/navbar/NavbarSingIn';

import Names from "./composants/RegisterForm/Names"
import Emailuser from "./composants/RegisterForm/Emailuser"
import Password from "./composants/RegisterForm/Password"
import Home from "./pages/Home";
import LoginUser from './composants/LoginForm/Loginuser';
import navbarHome from "./composants/navbar/NavbarHome"


import NavbarHome from './composants/navbar/NavbarHome';
import Landing from "./pages/Landing"

function App() {
  return (


<div className="App">

<body className="bg-slate-grey">
     
     <NavbarSignUp/>
      <NavbarSignIn/>
       <NavbarHome />


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
        
</body>

      </div>
        
  ) 
}
export default App
