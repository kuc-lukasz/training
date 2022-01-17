import { Descriptions, Image } from "antd";

export const DetailsContent = ({ movie }) => (
  <>
    <Descriptions title="Movie info" column={2}>
      <Descriptions.Item label="Movie title">{movie.Title}</Descriptions.Item>
      <Descriptions.Item label="Genre">{movie.Genre}</Descriptions.Item>
      <Descriptions.Item label="Director">{movie.Director}</Descriptions.Item>
      <Descriptions.Item label="Released">{movie.Released}</Descriptions.Item>
      <Descriptions.Item label="Actors">{movie.Actors}</Descriptions.Item>
    </Descriptions>
    <Image
      width={200}
      src={`https://res.cloudinary.com/dcopn0ll4/image/fetch/w_800,h_800,q_auto,c_fill,g_face/${movie.Poster}`}
    />
  </>
);
