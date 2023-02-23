import React, { useEffect, useState } from "react";
import LazyImage from "./LazyImage";

interface item {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const LazyLoad = () => {
  const [items, setItems] = useState<item[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        // console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>My Component</h1>

      {items.length > 0 ? (
        <LazyImage src={items[0].url} alt="garfield" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LazyLoad;

// useEffect(() => {
//   const fetchItems = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//   const data = await response.json();
//   setItems(data);
//    };
//    fetchItems();
// }, []);

// const image = {alt:'alt', height:'180px', width: '200px', src: NFBG, caption: 'whatever'};

//   <div>
//     <LazyLoadImage
//       alt={image.alt}
//       src={image.src} // use normal <img> attributes as props
//       height={image.height}
//       width={image.width} />
//     <span>{image.caption}</span>
//   </div>

// const Lazy = ({ NFBG }) => (

// <img src={NFBG}> </img>

// );
// export default Lazy;
