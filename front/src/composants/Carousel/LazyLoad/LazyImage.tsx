import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



// type LazyProps = {
//   src : string; 
//   alt: string; 
// }


const LazyImage = ({ src, alt }:any) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      effect="opacity"
      width="100%"
      height="auto"
    />
  );
};


export default LazyImage;
