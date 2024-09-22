import React from 'react';

const MultiSelect = ({ selectedOptions, setSelectedOptions }) => {
  const options = [
    { value: 'Alphabets', label: 'Alphabets' },
    { value: 'Numbers', label: 'Numbers' },
    { value: 'Highest Lowercase Alphabet', label: 'Highest Lowercase Alphabet' }
  ];

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(value)
        ? prevOptions.filter((opt) => opt !== value)
        : [...prevOptions, value]
    );
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={handleOptionChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default MultiSelect;

