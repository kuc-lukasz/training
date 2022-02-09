import { Input } from "antd";
import { useLayoutEffect, useState } from "react";

export const SearchField = ({ value, onSearch }) => {
  const [currentValue, setCurrentValue] = useState(value);

  useLayoutEffect(() => setCurrentValue(value), [value]);

  return (
    <Input.Search
      value={currentValue}
      onChange={(event) => setCurrentValue(event.currentTarget.value)}
      onSearch={onSearch}
      allowClear
      placeholder="search"
      style={{ width: 200 }}
    />
  );
};
