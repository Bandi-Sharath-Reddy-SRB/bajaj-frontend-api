import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ setResponseData, setError }) => {
  const [inputJson, setInputJson] = useState('');

  const handleInputChange = (e) => {
    setInputJson(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedJson = JSON.parse(inputJson); 
      const response = await axios.post('http://localhost:3000/bfhl', parsedJson); 
      setResponseData(response.data); 
      setError(''); 
    } catch (error) {
      setError('Invalid JSON input. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={inputJson} onChange={handleInputChange} placeholder='Enter JSON...' />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
