
import { Link } from "react-router-dom";

const NewEmail = () => {



    const handleNext = (event: any) => {
        event.preventDefault();
        
            // transition to other form 
          



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
          placeholder="Email Account"></input>
      </div>
      <Link to="#">                             
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
          >Send</button>
      </Link>

      </div>
      <div className="flex form-group justify-between">

      <h1 className='text-sm text-white ml-1'> Problem?<Link to="#" className="text-red-800 pl-2">help</Link>
      </h1>


    

    </div>
  </form>
</div>
</div>

</div>


);
}


 
export default NewEmail;

