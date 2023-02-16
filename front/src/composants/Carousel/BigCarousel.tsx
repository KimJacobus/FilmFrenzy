import { useSnapCarousel } from "react-snap-carousel";


const BigCarousel = () => {
        const { scrollRef,  next, prev, } = useSnapCarousel();
        
        return (

          <div className="control relative">


    <div className="arrows flex absolute w-screen h-96 items-end justify-between">

    <button className="text-9xl bg-gray-500" onClick={() => prev()}>{'<'}</button>

    <button className="text-9xl bg-gray-500"onClick={() => next()}>{'>'}</button>


      
    </div>



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
              key={i}

                style={{
                  backgroundColor: 'aqua',
                  fontSize: '50px',

                  width: '450px',
                  height: '650px',

                  borderRadius: '10px',
                  margin: '1.5rem',
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

          </div>


        );
      };


 
export default BigCarousel; 