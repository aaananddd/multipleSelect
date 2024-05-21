import { Controller, Form, FormProvider, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import React from "react";
import Select from "react-select";

const options = [
  { value: "red", label: "red" },
  { value: "green", label: "green" },
  { value: "blue", label: "blue" },
];

const ReactMultipleSelect = () => {
  const methods = useForm();
  const { handleSubmit, control } = methods;

  const onSubmit = (data) => {
    console.log(
      "Selected colors:",
      data.colors.map((option) => option.label)
    );
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="colors"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isMulti
              onChange={(selected) => field.onChange(selected)}
              placeholder="Select Colors..."
              isClearable
            />
          )}
        />
        <Button variant="outline" type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default ReactMultipleSelect;
