import NavbarSignUp from "../navbar/NavbarSingUp";
import Create from "../../API/Create";
import Check from "../../API/Check";

const Names = () => {




  const handleNext = (event: any) => {
    event.preventDefault();
    
        // transition to other form 



}



    return (  
      <div className="absolute h-screen w-screen bg-zinc-800">
        <NavbarSignUp/>
      
<div className="nameform relative">

<div className="flex w-screen h-auto justify-center">
<div className="p-6 mx-1 rounded shadow-lg bg-slate-900 mt-1">
<div className="flex text-red-500 pb-6 text-xl justify-center"><h1 className="border-2 border-red-600 p-2 rounded-full">Enregister</h1></div>
<div className="text-white">Step 2</div>
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
          placeholder="First name"></input>
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
          placeholder="Last name"></input>
      </div>

      <div className="form-group col-start-2 justify-self-end">

      <button type="submit" className="
      px-6
      py-2.5
      bg-zinc-800
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      shadow-md
      hover:bg-slate-400 hover:shadow-lg
      focus:bg-slate-400 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-slate-900 active:shadow-lg"
      >next</button>
    </div>
   </div>
  </form>
</div>
</div>

</div>


      <Create />
      <Check /> 




</div>

);

    }



 
export default Names;

