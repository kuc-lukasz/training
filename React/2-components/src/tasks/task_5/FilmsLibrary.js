import "../task_3/styleTask3.css";
import DescriptionField from "../task_4/DescriptionField";
import Image from "../task_3/Image";

const FilmsLibrary = ({ dataSrc }) => {
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

export default FilmsLibrary;
