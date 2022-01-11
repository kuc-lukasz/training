import React, { useState } from "react";
import "./FilmsList.css";

const SimpleGallery = () => {
  const images = [
    {
      url: "123",
      name: "Photo1",
    },
    {
      url: "123",
      name: "Photo2",
    },
    {
      url: "123",
      name: "Photo3",
    },
  ];

  const [selectedPhoto, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };
  return (
    <div>
      <p>{images[selectedPhoto].name}</p>
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
      </button>
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
