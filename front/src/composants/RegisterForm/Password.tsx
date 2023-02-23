import { useState, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom";

const Password = () => {

  const [passwordOne, setpasswordOne ] = useState("");
  const [passwordTwo, setpasswordTwo] = useState("");


  const [account, setAccount]= useState({});

  const navigate = useNavigate();


        // POST to API

        useEffect(() => {

          const firstname = sessionStorage.getItem('firstname' );
          const lastname = sessionStorage.getItem('lastname' );
          const username = sessionStorage.getItem('username' );
          const email = sessionStorage.getItem('email');
          const password = sessionStorage.getItem('password');
          

          
          if (firstname && lastname && username && email && password) {

              setAccount({firstname, lastname, username, email, password });
            
                sessionStorage.clear();


            if(account) {
              fetch('http://localhost:6868/api/auth/signup', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(account)
              }).then ((err) => {
                  console.log(err);
                  
              })
           
            }
            else {
              console.log("something is wrong");
              
            }
          }

          }, [passwordOne])
          
          
          
          const handlePassword = (e:any) => {
            
            if(passwordOne === passwordTwo) {

        const user = {passwordOne, passwordTwo}
        sessionStorage.setItem('password', user.passwordOne);

            

      navigate("/LoginForm")

      } else {
        e.preventDefault();

        alert("passwords don't match")
    }

  };

    return (  
    
      
<div className="nameform relative">

<div className="flex w-screen h-auto justify-center">
<div className="p-6 mx-1 rounded shadow-lg bg-slate-900 mt-1">
<div className="flex text-red-500 pb-6 text-md justify-between">

<h1 className="border-2 border-red-600 p-2 rounded">Register</h1>
<div className="text-white">3/4</div>
</div>

  <form>
    <div className="grid grid-cols-2 gap-4">
      <div className="form-group mb-6">
        <input type="text" className="
            form-control 
            w-full px-3
            py-2.5
          text-gray-700
          bg-zinc-800 bg-clip-padding
            border border-solid border-slate-600
            m-0
          focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none" 
          placeholder="Password" required value={passwordOne} onChange={(e) => setpasswordOne(e.target.value)}></input>
      </div>
      <div className="form-group mb-6">
        <input type="text" className="form-control
          block
          w-full
          px-3
          py-2.5
          text-base
          font-normal
          text-white
          bg-zinc-800 bg-clip-padding
          border border-solid border-slate-600
          focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
          placeholder="Password again" required value={passwordTwo} onChange={(e) => setpasswordTwo(e.target.value)}></input>
      </div>

      <div className="form-group col-start-2 justify-self-end">
      {/* <Link to="" > */}
     <button type="submit" onClick={handlePassword} className="
      px-6
      py-2.5
      bg-red-800
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      shadow-md
      hover:bg-slate-400 hover:shadow-lg
      focus:bg-slate-400 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-slate-900 active:shadow-lg"
      >Next Step</button>
      {/* </Link> */}
    </div>
   </div>
  </form>
</div>
</div>

</div>

);
}


 
export default Password;

