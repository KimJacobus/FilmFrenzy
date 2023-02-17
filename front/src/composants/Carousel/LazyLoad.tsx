import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NFBG } from '../../assets/pictures/NFBG.jpg';

const Lazy = () => {
    return ( 


<img className="h-10 w-10" src={NFBG}></img>


     );
}
 
export default Lazy;


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