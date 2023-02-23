import { useSnapCarousel } from "react-snap-carousel";
import { useEffect, useState } from "react";

const BigCarousel = () => {
  const { scrollRef, next, prev } = useSnapCarousel();
  const [activeItem, setActiveItem] = useState(null);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=83a1629902bd9dbacb7cf2bcff2293ab&query=dc"
      );
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
    // controls

    <div className="carousel">
      <div className="control relative">
        <div className="arrows flex absolute w-screen h-[51rem] items-end justify-between">
          <button
            className="text-9xl bg-gray-500 py-[20.5rem] opacity-10 hover:opacity-20"
            onClick={() => prev()}
          >
            {"<"}
          </button>

          <button
            className="text-9xl bg-gray-500 py-[20.5rem] opacity-10 hover:opacity-20"
            onClick={() => next()}
          >
            {">"}
          </button>
        </div>

        <ul
          ref={scrollRef}
          style={{
            display: "flex",
            overflow: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            cursor: "grab",
            userSelect: "none",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/w500${item.poster_path}')`,
                backgroundSize: 550,
              }}
              className={`righteous flex bg-cyan-400 text-3xl w-[550px] h-[800px] rounded-md m-5 shrink-0 text-white 
          justify-center items-center cursor-grab  select-none transition-all duration-500
          ${
            activeItem === i
              ? "active: w-[350px] active: h-[600px] transition-transform"
              : ""
          }`}
              onClick={() => handleClick(i)}
            >
              <h1 className="text-xl text-center">{item.title}</h1>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BigCarousel;
