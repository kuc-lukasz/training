import "./FilmsList.css";
import DescriptionField from "./DescriptionField";
import Image from "./Image";

const FilmsList = ({ dataSrc }) => {
  return (
    <>
      {dataSrc.map((e) => (
        <div className="film">
          <h4>
            {e.Title} ({e.Year})
          </h4>
          <Image imgSrc={e.Poster} />
          <DescriptionField label="Genre" value={e.Genre} />
          <DescriptionField label="Awards" value={e.Awards} />
          <DescriptionField label="Director" value={e.Director} />
        </div>
      ))}
    </>
  );
};

export default FilmsList;
