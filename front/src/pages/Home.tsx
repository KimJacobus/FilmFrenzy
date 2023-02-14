import NavbarHome from "../composants/navbar/NavbarHome";

const Home = () => {
    const handleClick= ()=> {
        console.log("hello you");
    }



    return (

        <div className="absolute h-screen w-screen bg-zinc-800">
            <NavbarHome/>

        <div className="Home">
            <p className="text-white"> La page avec du content </p>
            
           {/* <div>
            <h4>All movie for little price per month* . <br /> When you want and everywhere. 
           <br /> If you want joint the community of FrenzyMovie joint us </h4> <p>*(10$ per month)</p> 
           </div>
            <h5>Inscription just bellow</h5>

            <p>Image de fond pour la partie inscription </p>
            <p>lorem2</p>

            <div>
            <input type="text" /> 
            <button onClick={handleClick}> Mail </button>
            </div> */}

        </div>

        </div>

      );
}
 
export default Home;