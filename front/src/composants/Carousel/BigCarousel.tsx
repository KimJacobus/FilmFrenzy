import { useSnapCarousel } from "react-snap-carousel";


const BigCarousel = () => {
        const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
        
        return (

          <div className="control">

          <div className="arrows">

      <div>
      {activePageIndex + 1} / {pages.length}
    </div>
    <button onClick={() => prev()}>Prev</button>
    <button onClick={() => next()}>Next</button>
    <ol style={{ display: 'flex', color:'white' }}>
      {pages.map((_, i) => (
        <li key={i}>
          <button
            style={i === activePageIndex ? { opacity: 0.5 } : {}}
            onClick={() => goTo(i)}
          >
            {i + 1}
          </button>
        </li>
      ))}
    </ol>
    </div>





          <ul
            ref={scrollRef}
            style={{
              display: 'flex',
              overflow: 'auto',
              // scrollSnapType: 'x mandatory',
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