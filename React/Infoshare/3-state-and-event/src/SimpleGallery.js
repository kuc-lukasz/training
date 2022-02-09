import React, { useState } from "react";
import "./FilmsList.css";

const SimpleGallery = () => {
  const images = [
    {
      url: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      name: "Film1",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      name: "Film2",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
      name: "Film3",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMzAwNjU1OTktYjY3Mi00NDY5LWFlZWUtZjhjNGE0OTkwZDkwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      name: "Film4",
    },
  ];

  const [selectedPhoto, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

  const newData = images.map((photo, index) => {
    return (
      <div>
        <button
          className={selectedPhoto === index && "selected"}
          onClick={() => handleClick(index)}
        >
          {photo.name}
        </button>
      </div>
    );
  });

  return (
    <div>
      <img alt="poster" src={images[selectedPhoto].url} />
      {newData}
      {/*             
      <button 
        className={selectedPhoto === 0 && "selected"}
        onClick={() => handleClick(0)}
      >
        1
      </button>
      <button
        className={selectedPhoto === 1 && "selected"}
        onClick={() => handleClick(1)}
      >
        2
      </button>
      <button
        className={selectedPhoto === 2 && "selected"}
        onClick={() => handleClick(2)}
      >
        3
      </button> */}
    </div>
  );
};

// const SimpleGallery = () => {
//   const images = ["photo1", "photo2", "photo3"];
//   //   const handleClick = () => {
//   //     console.log("działa, kliknąłeś mnie!");
//   //   };
//   const displayImages = images.map((e, index) => {
//     return (
//       <div>
//         <p>{e}</p>
//         <button>{index}</button>
//       </div>
//     );
//   });

//   return { displayImages };
// };

export default SimpleGallery;
