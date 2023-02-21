import { useSnapCarousel } from 'react-snap-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React,{ useState, useEffect } from 'react';
import LazyImage from '../Carousel/LazyLoad/LazyImage';



// interface item {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }





const SmallCarousel = () => {


  const { scrollRef } = useSnapCarousel();
  const [activeItem, setActiveItem] = useState(null);
  const [items, setItems] = useState<any[]>([]);
  const [check, setCheck] = useState();


function nom(nom:string) {
return nom = 'Transfusion';

}



  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=83a1629902bd9dbacb7cf2bcff2293ab&language=fr-FR')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setItems(data);
      //       const match = data.find({data.original_title}) => data.original_title === 'Transfusion');
      // console.log(data);
      
      
      
      setCheck(data.results[0].poster_path);
      
    })
  }, []);
  


console.log(check);


  // console.log(items)
  if(items) {
    
    // console.log(items.results[0].poster_path);



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
          
          
          style={{backgroundImage: `url('${items.length > 0 ? check : ''})` }}  



          className={`righteous flex bg-cyan-400 text-3xl w-[250px] h-[350px] rounded-md m-5 shrink-0 text-white 
          justify-center items-center cursor-grab  select-none transition-all duration-500
         
          
          ${activeItem === i ? 'active: w-[350px] active: h-[600px] transition-transform' : ''}`}
          onClick={() => handleClick(i)}>
          Item {i}


        </div>
      ))}


    </ul>
  );


}
};

export default SmallCarousel;



