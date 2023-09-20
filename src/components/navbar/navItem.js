import React from "react";

function NavItem({ icon, text }) {
    return (
      <li className='w-4/5 text-gray-500 text-sm font-bold px-12 py-2 rounded-md flex justify-center items-center hover:bg-[#2042a8] hover:text-white cursor-pointer'>
        <span className='mr-5'>{icon}</span>
        {text}
      </li>
    );
  }

export default NavItem
  