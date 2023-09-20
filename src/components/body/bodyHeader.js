import React from 'react'

function BodyHeader() {
  return (
    <div className='flex flex-col gap-2'>
       <h3 className="text-3xl font-black">Prepare to scatter</h3>
       <p>We support the following Networks</p>
       <div>
         <ul className='flex justify-start items-center gap-3'>
          <li className='p-4 hover:shadow-md rounded-md'>
            <button className='flex justify-center items-center'>
              <img src='https://www.gatherdao.com/static/media/ethereum-oval.bc107f510b40acf5ca685f3236969a9e.svg' alt=''></img>
              Ethereum Mainnet
            </button> 
          </li>
          <li className='p-4 hover:shadow-md rounded-md'>
            <button className='flex justify-center items-center'>
              <img src='	https://www.gatherdao.com/static/media/binance-oval.42de5156af7753f44e1d51ddc9ed660b.svg' alt=''></img>
              Binance Smart Chain
            </button> 
          </li>
         </ul>
       </div>
    </div>
  )
}

export default BodyHeader
