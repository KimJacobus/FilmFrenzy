
import { useState } from "react";
import { Link } from "react-router-dom";

const NewPassword = () => {

  const [token, setToken] = useState <string> ("");
  const [passwordOne, setPasswordOne ] = useState <string> ("");
  const [passwordTwo, setPasswordTwo ] = useState <string> ("");

    const handleNext = (event: any) => {
        event.preventDefault();
        
          
          
            const password={token, passwordOne, passwordTwo};
            fetch("https://apilogin.herokuapp.com/update-password",{
   
             method:"POST",
             headers: { "content-type": "application/json"},
             body: JSON.stringify(password),
   
   
            }).then ((err)=> {
             console.log(err);
   
            })
             


    }

    return (  
      
<div className="nameform relative">

<div className="flex w-screen h-auto justify-center">


<div className="p-6 mx-1 rounded shadow-lg bg-slate-900  opacity-90 mt-1">
<div className="flex text-red-500 pb-6 text-md justify-center ">

  <h1 className="border-2 border-red-600 p-2 rounded">Reset Password</h1>
</div>
<form onSubmit={handleNext}>
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
          placeholder="New Password" onChange={(e)=> setPasswordOne (e.target.value)} value={passwordOne}></input>
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
          placeholder="New Password again" onChange={(e)=> setPasswordTwo (e.target.value)} value={passwordTwo}></input>
      </div>
      <input type="hidden" name="" id="" onChange={(e)=> setToken (e.target.value)} value={token}/>
             <div>                  
          <button type="submit" className="
          px-6
          py-4
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
          >Submit</button></div>   
   

      </div>
      <div className="flex form-group justify-between">
        <br />
      <h1 className='text-sm text-white ml-1'> Problem?<Link to="#" className="text-red-800 pl-2">help</Link>
      </h1>


    

    </div>
  </form>
</div>
</div>

</div>


);
}


 
export default NewPassword;

