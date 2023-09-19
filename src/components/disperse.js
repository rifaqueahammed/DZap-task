import React, { useContext, useEffect, useState } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Textarea from './textarea'
import { AddressContext } from '../context/addressContext'

function Disperse() {
    const {address} = useContext(AddressContext);
    const [errorMessage,setErrorMessage] = useState([]);
    const [dupError,setDupError] = useState([]);

    useEffect(()=>{
        console.log(dupError)
    })

    const onSubmit = () => {
        try {
        if(address !== '')
          validateaddressWithAmount(address);
          
        } catch (error){
          console.log(error);
        }
      };

      const validateaddressWithAmount = (address)=>{
        const lines = address.split('\n');
        const errors = [];
        const duplicateError = {};
        
        lines.forEach((line,index)=>{
           const [addressPart,amountPart] = line.trim().split(/[,\s=]+/);
           const isNumber = /^[+-]?\d+(\.\d+)?$/.test(amountPart);
           if(!isNumber){
            errors.push(`Line ${index + 1} wrong amount`);
           }
           // Check Duplicate Address
          if(!duplicateError[addressPart]){
            duplicateError[addressPart] = [index+1];
          }
          else {
            duplicateError[addressPart].push(index+1);
          }
        })
        const result = Object.entries(duplicateError).filter(([address, positions]) => positions.length > 1)
        .map(([address, positions]) => ({ address, positions }));
        setErrorMessage(errors);
        setDupError(result)
        console.log(result)
      }



  return (
    <div className='bg-white m-5 p-10 flex flex-col rounded-lg gap-3'>
      <div>
        <h1>Scatter steps</h1>
      </div>
      <div className='flex flex-col rounded-lg gap-3'>
        <h3 className='text-2xl font-bold'>Prepare to scatter</h3>
        <div>
            <p>We support the following Networks</p>
        </div>
        <div className='flex flex-col gap-1'>
            <label>Token Address</label>
            <input className='p-2 border border-black focus:outline-none active:outline-none' type='text' placeholder='Select or Search by Address'></input>
        </div>
        <div>
           <label>Addresses with Amounts</label>
           <Textarea/>
        </div>
        { errorMessage.length !== 0 && <div className='border border-red-700 text-red-700 flex items-center p-1'>
          <ExclamationCircleOutlined />
          <div className='ml-5'>{errorMessage.map((error,key)=>(
            <p key={key}>{error}</p>
            ))}
          </div> 
        </div>}
        { dupError.length !== 0 && 
          <><div className='flex justify-between'>
             <p className='text-red-700'>Duplicated</p>
              <div><button className='text-red-700'>Keep the first one</button><span>||</span><button className='text-red-700'>Combine Balance</button></div>
            </div>
            <div className='border border-red-700 text-red-700 flex items-center p-1'>
                      <ExclamationCircleOutlined />
                      <div className='ml-5'>
                          {dupError.map((error, key) => (
                              <p key={key}>Address {error.address} encountered duplicate in Line: {error.positions.join(', ')}</p>
                          ))}
                      </div>
                  </div></>} 
        <button onClick={onSubmit} className='w-full bg-gradient-to-r from-[#d080ff] to-[#6c5dd3] p-5 text-4 text-[#fff] rounded-full'>Next</button>
      </div>
    </div>
  )
}

export default Disperse
