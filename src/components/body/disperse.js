import React, { useContext, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Textarea from "./textarea";
import { AddressContext } from "../../context/addressContext";
import {
  validateaddressWithAmount,
  keepFirstOneAddress,
  combineBalancesAddress,
} from "../../helpers/helpers";
import TokenInput from "./tokenInput";
import BodyHeader from "./bodyHeader";

function Disperse() {
  const { address, setAddress } = useContext(AddressContext);
  const [errorMessage, setErrorMessage] = useState([]);
  const [dupError, setDupError] = useState([]);


  const onSubmit = () => {
    let res;
    try {
      if (address !== "") res = validateaddressWithAmount(address);
      setErrorMessage(res.errors);
      setDupError(res.duplicateAddress);
    } catch (error) {
      console.log(error);
    }
  };

  const keepFirstOne = () => {
    let res;
    try {
      if (address !== "") res = keepFirstOneAddress(address);
      setAddress(res);
      setDupError([]);
      const validation = validateaddressWithAmount(res);
      setErrorMessage(validation.errors);
    } catch (error) {
      console.log(error);
    }
  };

  const combineBalances = () => {
    let res;
    try {
      if (address !== "") res = combineBalancesAddress(address);
      setAddress(res);
      setDupError([]);
      const validation = validateaddressWithAmount(res);
      setErrorMessage(validation.errors);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-1 md:p-5">
      <div className="flex flex-col rounded-lg gap-3">
        <BodyHeader/>
        <TokenInput/>
        <Textarea />
        {errorMessage.length !== 0 && (
          <div className="border border-red-700 text-red-700 flex items-center p-1">
            <ExclamationCircleOutlined />
            <div className="ml-5">
              {errorMessage.map((error, key) => (
                <p key={key}>{error}</p>
              ))}
            </div>
          </div>
        )}

        {dupError.length !== 0 && (
          <>
            <div className="flex justify-between flex-col md:flex-row">
              <p className="text-red-700">Duplicated</p>
              <div className="flex gap-2 justify-center">
                <button className="text-red-700" onClick={keepFirstOne}>
                  Keep the first one
                </button>
                <span>|</span>
                <button className="text-red-700" onClick={combineBalances}>
                  Combine Balance
                </button>
              </div>
            </div>
            <div className="border border-red-700 text-red-700 flex items-center p-1">
              <ExclamationCircleOutlined />
              <div className="ml-5">
                {dupError.map((error, key) => (
                  <p key={key}>
                    Address {error.address} encountered duplicate in Line:{" "}
                    {error.positions.join(", ")}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}
        <button
          onClick={onSubmit}
          className="w-full bg-gradient-to-r from-[#d080ff] to-[#6c5dd3] p-5 text-4 text-[#fff] rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Disperse;
