import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
  const filteredData = () => {
    let data = [];
    if (selectedOptions.includes('Alphabets')) {
      data = [...data, ...response.alphabets];
    }
    if (selectedOptions.includes('Numbers')) {
      data = [...data, ...response.numbers];
    }
    if (selectedOptions.includes('Highest Lowercase Alphabet')) {
      data = [...data, ...response.highest_lowercase_alphabet];
    }
    return data;
  };

  return (
    <div>
      <h2>Response</h2>
      {filteredData().map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default ResponseDisplay;
