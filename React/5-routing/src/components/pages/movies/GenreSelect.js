import { Select } from "antd";

export const GenreSelect = ({ value, onChange }) => (
  <Select
    allowClear
    placeholder="(all genres)"
    style={{ width: 120 }}
    value={value}
    onChange={onChange}
  >
    <Select.Option value="Drama">Drama</Select.Option>
    <Select.Option value="Action">Action</Select.Option>
    <Select.Option value="Fantasy">Fantasy</Select.Option>
  </Select>
);
