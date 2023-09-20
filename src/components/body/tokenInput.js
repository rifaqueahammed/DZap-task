import React from 'react'

function TokenInput() {
  return (
    <div className="flex flex-col gap-1">
          <label>Token Address</label>
          <input
            className="p-4 border border-black focus:outline-none active:outline-none bg-[#f0f2f5]"
            type="text"
            placeholder="Select or Search by Address"
          ></input>
    </div>
  )
}

export default TokenInput
