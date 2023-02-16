import NavbarHome from "../composants/navbar/NavbarHome";
import Carousel from "../composants/Carousel/Carousel";
import Demo from "../composants/Carousel/demo";

const Home = () => {
    return (
        <div className="Home">
      
            <div className="absolute h-screen w-screen bg-zinc-800"> 

        <div className="Navbar">   
            <NavbarHome/>
            </div>

        <div className="content">

            <Demo />
            <Demo />
            <Demo />

            {/* <Carousel /> */}

        </div>

        </div>


        </div>


      );
}
 
export default Home;