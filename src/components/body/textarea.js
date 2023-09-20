import React, { useContext } from "react";
import { AddressContext } from "../../context/addressContext";

const Textarea = () => {
  const {address, setAddress} = useContext(AddressContext)
  const lines = address.split("\n");

return (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between">
    <label>Addresses with Amounts</label>
    <p>Upload File</p>
    </div>
    <div className=" flex flex-col gap-1">
        <div className="flex border p-2 bg-[#f0f2f5] rounded-lg">
        <div className="w-10 min-h-[1rem] text-gray-500 mt-1">
        {lines.map((line, index) => (
          <div key={index} className="text-right select-none">
            {index + 1}
          </div>
        ))}
      </div>
      <textarea
        className="flex-grow p-2 border-l bg-inherit ml-2 focus:outline-none active:outline-none h-48"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        rows={lines.length || 1}
      />
      </div>
    </div>
    <div className="flex justify-between mt-5">
     <p>Separated by ',' or ' ' or '='</p>
     <button className="underline">Show Example</button>
    </div>
  </div>
  );
};

export default Textarea;
