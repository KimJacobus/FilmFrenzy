import Names from "./composants/RegisterForm/Names"
import Password from "./composants/RegisterForm/Password"
import Home from "./pages/Home";
import LoginUser from './composants/LoginForm/Loginuser';
import Landing from "./pages/Landing";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Switch } from "@mui/material";
import NavbarHome from "./composants/navbar/NavbarHome";
import NewEmail from "./composants/forgotpassword/sendMail";
import NewPassword from "./composants/forgotpassword/NewPassword";
import Log from "./pages/Log";



function App() {
  return (

    <Router> 
      <div className="App">
        
        <div className="content"> 
        {/** route for the register and the first page for website*/}
         
          <Routes>
            <Route path='/' element={<Landing/>}>
            </Route> 
          </Routes>
       


        {/** route for the register  step 2 to step 3*/}
           
          <Routes>
            <Route path='/RegisterForm2' element={<Names/>}>
            </Route> 
          </Routes>

        {/** route for the register  step 3 to step 3*/}
            
          <Routes>
            <Route path='/RegisterForm3' element={<Password/>}>
            </Route> 
          </Routes>

        {/** route for page log-In */}
              
          <Routes>
            <Route path='/LoginForm' element={< Log/>}>
            </Route> 
          </Routes>



        {/** route for the page*/}
          <Routes>
            <Route path='/home' element={<Home/>}>
            </Route> 
          </Routes>

          {/**Route for forgot password */}

          <Routes>
            <Route path='/SendEmail' element={<NewEmail/>}>
            </Route> 
          </Routes>

          <Routes>
            <Route path='/NewPassword' element={<NewPassword/>}>
            </Route> 
          </Routes>

         
        </div>
      </div>
    </Router>      
  ) ;
}
export default App



{/*
listes component :
{
 <---------- Landing --------------> 
#register : 
-<NavbarSignUp/>

- <Landing/>

-     <Emailuser />
      -<Names />
      -<Password />

-info site ???? 
-devise accepted
-footer


#login :

- <NavbarSignIn/>

-  <LoginUser /> (with background ????)

-footer



<-------------home ------------->
#homepage :
-<NavbarHome />

- <Home />

<-------- bg color ---------> 
<body className="bg-slate-grey">
}*/
}




  
  