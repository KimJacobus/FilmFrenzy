
import { useSnapCarousel } from 'react-snap-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React,{ useState, useEffect } from 'react';
import LazyImage from '../Carousel/LazyLoad/LazyImage';


const SmallCarousel = () => {
  const { scrollRef } = useSnapCarousel();
  const [activeItem, setActiveItem] = useState(null);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=83a1629902bd9dbacb7cf2bcff2293ab&query=a');
      const data = await response.json();
      const results = data.results.map((item: any) => item);
      setItems(results);

    };
    fetchImages();
  }, []);
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
          ${activeItem === i ? 'active: w-[350px] active: h-[600px] transition-transform' : ''}`}
          onClick={() => handleClick(i)}
        >
          <h1 className="text-xl text-center">{item.title}</h1> 
        </div>
      ))}
    </ul>
  );
};
export default SmallCarousel



