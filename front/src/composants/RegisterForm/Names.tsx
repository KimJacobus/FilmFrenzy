import { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";

const Names = () => {


  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] =useState ("");

  const navigate = useNavigate();


    const handleNames = (e:any) => {
      e.preventDefault();
         // Vérifier si les champs sont remplis
    if (!firstname || !lastname) {
      setError("Please enter your firstname and lastname.");
      return;
  }   
  

    const names = {firstname, lastname}

      sessionStorage.setItem('firstname', names.firstname)
      sessionStorage.setItem('lastname', names.lastname)

      navigate('/RegisterForm3')


    }

    return (  
      
      
<div className="nameform relative">

<div className="flex w-screen h-auto justify-center">

<div className="p-6 mx-1 rounded shadow-lg bg-slate-900 mt-1">
<div className="flex text-red-500 pb-6 text-md justify-between">
  
  <h1 className="border-2 border-red-600 p-2 rounded">Register</h1>
  <div className="text-white mb-3">2/4</div>
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
          placeholder="First name" required value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
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
          placeholder="Last name" required value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      <div className="form-group col-start-2 justify-self-end">
      {/* <Link to="/RegisterForm3" > */}
      <button type="submit" onClick={handleNames} className="
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



 
export default Names;

