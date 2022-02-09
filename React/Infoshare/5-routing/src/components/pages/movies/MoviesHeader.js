import { PageHeader } from "antd";
import { GenreSelect } from "./GenreSelect";
import { SearchField } from "./SearchField";

export const MoviesHeader = ({
  searchText,
  onSearch,
  genre,
  onGenreChange,
}) => {
  return (
    <PageHeader
      ghost={false}
      title="Movies"
      subTitle="browse list of movies"
      extra={[
        <SearchField value={searchText} onSearch={onSearch} />,
        <GenreSelect value={genre} onChange={onGenreChange} />,
      ]}
    />
  );
};
