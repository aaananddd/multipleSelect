import { usePDF } from "react-to-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ResumeTemplate = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <div>
      <button onClick={() => toPDF()}>Download PDF</button>
      <div ref={targetRef}>
        <div className="max-w-screen-lg mx-auto bg-white shadow-lg p-8 my-8">
          <div className="relative block page flex">
            {/* Left Sidebar */}
            <div className="w-1/3 bg-gray-200 py-10 px-6 relative">
              {/* Profile Image */}
              <div className="mugshot mb-4">
                <img
                  src="/public/images/img-2.png"
                  alt="Profile"
                  className="w-full h-auto rounded-full"
                />
              </div>
              {/* Contact Information and Social Links */}
              <div>
                <br />
                <div>
                  <h3 className="uppercase mb-2 font-semibold">
                    Contact Details
                  </h3>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-gray-700 mr-2"
                    />
                    <p>1-800-CALLPLZ</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-gray-700 mr-2"
                    />
                    <p>emailsareforsquares@gmail.com</p>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-gray-700 mr-2"
                    />
                    <p>123 My Place Drive, Astoria, New York 11105</p>
                  </div>
                </div>
                <p className="uppercase block mt-12 font-semibold">Skills</p>
                <p className="block list-thing">HTML</p>
                <p className="block list-thing">CSS (Stylus)</p>
                <p className="block list-thing">JavaScript & jQuery</p>
                <p className="block list-thing">Killer Taste</p>
              </div>
            </div>

            {/* Main Content Container */}
            <div className="relative content-container ml-6 px-10 py-6 w-2/3">
              <h2 className="uppercase text-center text-4xl font-semibold mb-4">
                John Doe
              </h2>
              <div className="uppercase text-gray-600 mb-2">About</div>
              <p className="text-justify mb-8">
                Driven by a deep curiosity for technology and a keen eye for
                design, I specialize in front-end development with a focus on
                creating intuitive interfaces and seamless user interactions.
              </p>
              <div className="block bg-gray-400 h-px w-96 mx-auto mb-6"></div>

              <div className="uppercase text-gray-600  mb-2">
                Educational Details
              </div>
              <h3 className="font-medium text-lg mb-2">
                Highest Qualification
              </h3>
              <p className="text-gray-700 mb-4">qualification details here</p>
              <h3 className="font-medium text-lg mb-2">Institute</h3>
              <p className="text-gray-700 mb-4">institute name</p>
              <h3 className="font-medium text-lg mb-2">Board</h3>
              <p className="text-gray-700 mb-4">board</p>
              <h3 className="font-medium text-lg mb-2">
                Additional Qualification
              </h3>
              <p className="text-gray-700 mb-4">
                additional qualifications here
              </p>

              <div className="uppercase text-gray-600 mt-12 mb-2">
                Experience
              </div>
              <h3 className="font-medium text-lg mb-2">Years of experience</h3>
              <p className="text-gray-700 mb-4">no of years</p>
              <h3 className="font-medium text-lg mb-2">Expected Salary</h3>
              <p className="text-gray-700 mb-4">expected salary</p>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};
export default ResumeTemplate;
