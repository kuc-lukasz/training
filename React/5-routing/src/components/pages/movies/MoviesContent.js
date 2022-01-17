import { RightCircleOutlined } from "@ant-design/icons";
import { Avatar, Button, List } from "antd";

function getMatchingMovies(movies, searchText, genre) {
  return movies
    .filter((movie) =>
      [movie.Title, movie.Plot].some((text) =>
        text.trim().toLowerCase().includes(searchText.trim().toLowerCase())
      )
    )
    .filter((movie) => !genre || movie.Genre.includes(genre));
}

export const MoviesContent = ({ searchText, genre, movies, onMovieSelect }) => {
  const data = getMatchingMovies(movies, searchText, genre);

  return (
    <List
      dataSource={data}
      renderItem={(item) => {
        return (
          <List.Item
            key={item.id}
            actions={[
              <Button
                onClick={() => onMovieSelect(item.Id)}
                type="link"
                block
                icon={<RightCircleOutlined />}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://res.cloudinary.com/dcopn0ll4/image/fetch/w_32,h_32,q_auto,c_thumb,g_face/${item.Poster}`}
                />
              }
              title={
                <a href="#" onClick={() => onMovieSelect(item.Id)}>
                  {item.Title}
                </a>
              }
              description={item.Plot}
            />
          </List.Item>
        );
      }}
    />
  );
};
