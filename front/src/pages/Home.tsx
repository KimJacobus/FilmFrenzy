import NavbarHome from "../composants/navbar/NavbarHome";
import SmallCarousel from "../composants/Carousel/SmallCarousel";
import BigCarousel from "../composants/Carousel/BigCarousel";
import CatBar from "../composants/Carousel/CatBar";
import Inputsearchbar from "../composants/LoginForm/Inputsearchbar";
import { useState } from 'react';

const Home = () => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <div className="Home">
      <div className="absolute min-h-screen w-screen bg-zinc-800"> 
        <div className="Navbar mb-2">   
          
          <NavbarHome onQueryChange={handleQueryChange}/>


        </div>
        <div className="lg:hidden">
          <SmallCarousel query={query} />


          
        </div>
        <div className="lg:inline hidden">
          {/* <BigCarousel query={query} /> */}
          <BigCarousel />
        </div>
      </div>
    </div>
  );
}
 
export default Home;
