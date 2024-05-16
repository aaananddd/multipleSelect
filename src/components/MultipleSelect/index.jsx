import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "red", label: "red" },
  { value: "green", label: "green" },
  { value: "blue", label: "blue" },
];

const MultipleSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <Select
      options={options}
      isMulti
      value={selectedOptions}
      onChange={handleChange}
      placeholder="Select Colors..."
      isClearable
    />
  );
};

export default MultipleSelect;
