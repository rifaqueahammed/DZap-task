
import './App.css';
import Layout from './pages/layout';
import { AddressContext } from './context/addressContext';
import { useState } from 'react';

function App() {
  const [address, setAddress] =useState("");
  return (
    <AddressContext.Provider value={{address,setAddress}}>
      <div className="App w-full">
        <Layout/>
        </div>
    </AddressContext.Provider>
  );
}

export default App;
