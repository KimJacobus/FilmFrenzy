import { useSnapCarousel } from 'react-snap-carousel'
import { useState, useEffect } from 'react'


const SmallCarousel = (prop:any) => {


  const { scrollRef } = useSnapCarousel()
  const [activeItem, setActiveItem] = useState(null)
  const [items, setItems] = useState<any[]>([])
  const [query, setQuery] = useState<any>(prop.query)

  console.log(prop.query);
  console.log(prop.query.length);



  // console.log(query);
  
  useEffect(() => {
    // between searchbar and clicked genre buttons on length or on type
    
    if(prop.query.length > 15) {
      
      setQuery(prop.query);

    } else {

      const url = 'https://api.themoviedb.org/3/search/movie?api_key=83a1629902bd9dbacb7cf2bcff2293ab&query=' + prop.query; 

      setQuery(url + prop.query);

    }
    
  }, [prop.query]);
  



  useEffect(() => {

    const url = query

    
    const fetchImages = async () => {
      
      

      const response = await fetch(url);
      const data = await response.json();
      const results = data.results.map((item: any) => item);
      setItems(results);

    };
    fetchImages();
  }, [query]);
// put depency here ? for refreshing on search 


  const handleClick = (index: any) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <ul
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'auto',
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'none',
        cursor: 'grab',
        userSelect: 'none',
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{

            backgroundImage: `url('https://image.tmdb.org/t/p/w400${item.poster_path}')`,

          }}
          className={`righteous flex bg-cyan-400 text-3xl w-[250px] h-[350px] rounded-md m-5 shrink-0 text-white 
          justify-center items-center cursor-grab  select-none transition-all duration-500
          ${activeItem === i ? 'active: w-screen h-[37rem] transition-transform' : ''}`}
          onClick={() => handleClick(i)}
        >
          <h1 className="text-xl text-center">{item.title}</h1> 
        </div>
      ))}
    </ul>
  );
};
export default SmallCarousel



