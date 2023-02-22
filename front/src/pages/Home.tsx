import NavbarHome from "../composants/navbar/NavbarHome";
import SmallCarousel from "../composants/Carousel/SmallCarousel";
import BigCarousel from "../composants/Carousel/BigCarousel";
import CatBar from "../composants/Carousel/CatBar";

const Home = () => {
    return (
        <div className="Home">
      
            <div className="absolute min-h-screen w-screen bg-zinc-800"> 

        <div className="Navbar mb-2">   

            <NavbarHome />


            </div>

        <div className="lg:hidden">
                
                


            <SmallCarousel />




        </div>


        <div className="lg:inline hidden">


                <CatBar/>
            <BigCarousel />
                <CatBar/>
            <BigCarousel />



        </div>



            </div>
        </div>


      );
}
 
export default Home;