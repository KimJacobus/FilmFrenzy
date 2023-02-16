import { useSnapCarousel } from 'react-snap-carousel';

const SmallCarousel = () => {

  const { scrollRef } = useSnapCarousel();
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
      {Array.from({ length: 100 }).map((_, i) => (
          <li
          style={{
            backgroundColor: 'aqua',
            fontSize: '50px',
            width: '250px',
            height: '250px',
            borderRadius: '10px',
            margin: '0.5rem',
            flexShrink: 0,
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'grab',
            userSelect: 'none'
          }}
        >
          Item {i}
        </li>
      ))}


    </ul>
  );
};

export default SmallCarousel;



// import React, { useEffect, useState } from 'react';
// import { useSnapCarousel } from 'react-snap-carousel';

// const Demo = () => {
//   const { scrollRef } = useSnapCarousel();
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       const response = await fetch('https://your-api-endpoint.com/items');
//       const data = await response.json();
//       setItems(data);
//     };

//     fetchItems();
//   }, []);

//   return (
//     <ul
//       ref={scrollRef}
//       style={{
//         display: 'flex',
//         overflow: 'auto',
//         scrollbarWidth: 'none',
//       }}
//     >
//       {items.map((item, index) => (
//         <li
//           key={index}
//           style={{
//             backgroundColor: 'aqua',
//             fontSize: '50px',
//             width: '250px',
//             height: '250px',
//             flexShrink: 0,
//             color: '#fff',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <img src={item.image_url} alt={item.name} />
//           <div>{item.name}</div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Demo;
