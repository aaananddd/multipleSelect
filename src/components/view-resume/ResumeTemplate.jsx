import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col items-center">
          <img
            src="/public/images/img-1.png" // Replace with actual image source from API integration
            alt="Student"
            className="w-32 h-32 rounded-full mb-4"
          />
          <div className="w-full grid grid-cols-2 gap-4">
            <input
              {...register("firstName", { required: true })}
              className="outline-none px-4 py-3 w-full border border-black "
              placeholder="First Name"
              type="text"
            />
            <input
              {...register("lastName", { required: true })}
              className="outline-none px-4 py-3 w-full border border-black"
              placeholder="Last Name"
              type="text"
            />
          </div>
        </div>
        <div className="border-t border-black mt-4 pt-4">
          <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
          <div className="space-y-2">
            <div>
              <label className="block font-medium">Phone:</label>
              <input
                {...register("phone", { required: true })}
                className="outline-none px-4 py-3 w-full border border-black"
                placeholder="Phone"
                type="text"
              />
            </div>
            <div>
              <label className="block font-medium">Email:</label>
              <input
                {...register("email", { required: true })}
                className="outline-none px-4 py-3 w-full border border-black"
                placeholder="Email"
                type="email"
              />
            </div>
            <div>
              <label className="block font-medium">Address:</label>
              <input
                {...register("address", { required: true })}
                className="outline-none px-4 py-3 w-full border border-black"
                placeholder="Address"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-black mt-4 pt-4">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <textarea
            {...register("skills", { required: true })}
            className="outline-none px-4 py-3 w-full border border-black"
            placeholder="List your skills here..."
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
