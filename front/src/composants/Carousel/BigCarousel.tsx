import { useSnapCarousel } from "react-snap-carousel";


const BigCarousel = () => {
        const { scrollRef,  next, prev, } = useSnapCarousel();
        
        return (

          <div className="control relative">


    <div className="arrows flex absolute w-screen h-[42rem] items-end justify-between">

    <button className="text-9xl bg-gray-500 py-[16.2rem] opacity-0 hover:opacity-20" onClick={() => prev()}>{'<'}</button>

    <button className="text-9xl bg-gray-500 py-[16.2rem] opacity-0 hover:opacity-20"onClick={() => next()}>{'>'}</button>


      
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


                className="righteous flex bg-cyan-400 text-3xl w-[450px] h-[650px] rounded-md m-5 shrink-0 text-white justify-center items-center cursor-grab select-none"

              >
                Item {i}
              </li>
            ))}
          </ul>

          </div>


        );
      };


 
export default BigCarousel; 