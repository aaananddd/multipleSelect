import { useState } from "react";
import Select from "react-select";
import { Button } from "../ui/button";

const MultipleSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleSubmit = () => {
    console.log(
      "selected colors:",
      selectedOptions.map((option) => option.label)
    );
  };

  return (
    <div>
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        placeholder="Select Colors..."
        isClearable
      />
      <Button variant="outline" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default MultipleSelect;
