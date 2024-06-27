import React from "react";
import { useForm } from "react-hook-form";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const downloadResume = () => {
    const input = document.getElementById("resume");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="App min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-4">
        <div
          id="resume"
          className="bg-white shadow-2xl rounded-lg p-6 w-[650px]"
        >
          <div className="flex flex-col items-center">
            <img
              src="/public/images/img-2.png" // Replace with actual image source from API integration
              alt="Student"
              className="w-32 h-32 rounded-full mb-4"
            />
            <div className="w-full grid grid-cols-2 gap-4">
              <input
                {...register("firstName", { required: true })}
                className="outline-none px-4 py-3 w-full border border-black mb-2"
                placeholder="First Name"
                type="text"
              />
              <input
                {...register("lastName", { required: true })}
                className="outline-none px-4 py-3 w-full border border-black mb-2"
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
            <h2 className="text-xl font-semibold mb-2">Educational Details</h2>
            <div className="space-y-2">
              <div>
                <label className="block font-medium">
                  Highest Qualification:
                </label>
                <input
                  {...register("highestQualification", { required: true })}
                  className="outline-none px-4 py-3 w-full border border-black"
                  placeholder="Highest Qualification"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-medium">Institute:</label>
                <input
                  {...register("institute", { required: true })}
                  className="outline-none px-4 py-3 w-full border border-black"
                  placeholder="Institute"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-medium">Board:</label>
                <input
                  {...register("board", { required: true })}
                  className="outline-none px-4 py-3 w-full border border-black"
                  placeholder="Board"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-medium">
                  Additional Qualification:
                </label>
                <input
                  {...register("additionalQualification", { required: true })}
                  className="outline-none px-4 py-3 w-full border border-black"
                  placeholder="Additional Qualification"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-medium">Experience:</label>
                <input
                  {...register("experience", { required: true })}
                  className="outline-none px-4 py-3 w-full border border-black"
                  placeholder="Experience"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-medium">Expected Salary:</label>
                <input
                  {...register("expectedSalary", { required: true })}
                  className="outline-none px-4 py-3 w-full border border-black"
                  placeholder="Expected Salary"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-medium">Skills:</label>
                <input
                  {...register("eduSkills", { required: true })}
                  className="outline-none px-4 py-3 w-full border border-black"
                  placeholder="Skills"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={downloadResume}
            className="px-4 py-2 bg-black hover:bg-slate-900 text-white rounded mr-4"
          >
            Download Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
