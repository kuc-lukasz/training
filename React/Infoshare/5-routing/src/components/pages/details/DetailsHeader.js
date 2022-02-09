import { PageHeader } from "antd";

export const DetailsHeader = ({ onBack, movie }) => (
  <PageHeader
    ghost={false}
    onBack={onBack}
    title={"Movie Details"}
    subTitle={movie.Title}
  />
);
