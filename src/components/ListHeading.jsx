import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const ListHeading = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for animation
    });
  }, []);

  return (
    <div className="container mx-auto py-10 px-4" id="listheading">
      <hr className="mb-8" />
      {/* Grid container for list headings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Heading Section 1 */}
        <div
          className="flex flex-col items-start"
          data-aos="zoom-out-up"
        >
          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            Resources
          </h4>
          <ul className="space-y-3">
            <li className="text-gray-600 hover:text-gray-900 transition">Gift Card</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Find a Store</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Equipment</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Materials</li>
          </ul>
        </div>

        {/* Heading Section 2 */}
        <div
          className="flex flex-col items-start"
          data-aos="zoom-out-up"
        >
          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            Help
          </h4>
          <ul className="space-y-3">
            <li className="text-gray-600 hover:text-gray-900 transition">Guidance</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Assistance</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Membership</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Care Do</li>
          </ul>
        </div>

        {/* Heading Section 3 */}
        <div
          className="flex flex-col items-start"
          data-aos="zoom-out-up"
        >
          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            Company
          </h4>
          <ul className="space-y-3">
            <li className="text-gray-600 hover:text-gray-900 transition">Innovation</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Performance</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Empowerment</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Legacy</li>
          </ul>
        </div>

        {/* Heading Section 4 */}
        <div
          className="flex flex-col items-start"
          data-aos="zoom-out-up"
        >
          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            Developer Detail
          </h4>
          <ul className="space-y-3">
            <li className="text-gray-600 hover:text-gray-900 transition">Fakhar Abbas</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Frontend Developer</li>
            <li className="text-gray-600 hover:text-gray-900 transition">0308-6046246</li>
            <li className="text-gray-600 hover:text-gray-900 transition">Site Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListHeading;
