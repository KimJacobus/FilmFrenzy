import { useSnapCarousel } from 'react-snap-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React,{ useState, useEffect } from 'react';
import LazyImage from '../Carousel/LazyLoad/LazyImage';



interface item {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}





const SmallCarousel = () => {


  const { scrollRef } = useSnapCarousel();
  const [activeItem, setActiveItem] = useState(null);
  const[items, setItems] = useState<item[]>([]);




  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setItems(data);
      console.log(data);
    })
  }, []);
  




  const handleClick = (index: any) => {
    if (activeItem === index) {

      setActiveItem(null)
      
    } else {

    setActiveItem(index)
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
        userSelect: 'none'
      }}
    >


      {Array.from({ length: 10 }).map((_, i) => (
          <div

          
          key={i}
          
          
          style={{backgroundImage: `url('${items.length > 0 ? items[1].url : ''})` }}  




          className={`righteous flex bg-cyan-400 text-3xl w-[250px] h-[350px] rounded-md m-5 shrink-0 text-white 
          justify-center items-center cursor-grab  select-none transition-all duration-500
         
          
          ${activeItem === i ? 'active: w-[350px] active: h-[600px] transition-transform' : ''}`}
          onClick={() => handleClick(i)}>
          Item {i}


        </div>
      ))}


    </ul>
  );
};

export default SmallCarousel;



