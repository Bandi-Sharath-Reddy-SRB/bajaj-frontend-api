import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import MultiSelect from './components/MultiSelect';
import './App.css';

const App = () => {
  const [responseData, setResponseData] = useState(null); 
  const [selectedOptions, setSelectedOptions] = useState([]); 
  const [error, setError] = useState(''); 

  return (
    <div className="app">
      <h1>RA2111026010013</h1>
      <InputForm setResponseData={setResponseData} setError={setError} />
      {responseData && (
        <>
          <MultiSelect selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
          <ResponseDisplay response={responseData} selectedOptions={selectedOptions} />
        </>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
