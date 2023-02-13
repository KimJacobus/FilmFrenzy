import NavbarSignUp from './navbar/navbar-singup';
import NavbarHome from './navbar/navbarHome';
import NavbarSignIn from './navbar/navbar-singin';


function App() {
  const title = "wassup";

  return (


    <div className="App">
      <NavbarSignUp/>
      <NavbarSignIn/>
       <NavbarHome />
      <div className="content">

     
    


    <h1 className="text-3xl font-bold underline">
            <p> Hello world! {title}</p> 


      
    </h1>
    </div>
    </div>


  ) 
}
export default App
