import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Light", "Dark"];
  const [selectedOption, setSelectedOption] = useState("Light");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full text-sm font-bold text-gray-700 border-2  focus:outline-none focus:ring focus:ring-opacity-50 rounded-full px-8 py-4"
        >
          {selectedOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}{" "}
                {selectedOption === option && (
                  <span className="float-left">&#10003;</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
