import NavbarHome from "../composants/navbar/NavbarHome";
import Carousel from "../composants/Carousel/Carousel";

const Home = () => {
    return (
        <div className="Home">
      
            <div className="absolute h-screen w-screen bg-zinc-800"> 

        <div className="Navbar">   
            <NavbarHome/>
            </div>

        <div className="Home">

            <Carousel />

        </div>

        <div className="Background">

        </div>
        </div>


        </div>


      );
}
 
export default Home;