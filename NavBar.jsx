import React, { useState } from 'react';


function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Close the dropdown if the same option is clicked again
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div className="dropdown">
       <h1 className='south'>South Sydney Rabbitohs</h1>
      <ul className="dropdown-options">
        <li onClick={() => handleOptionClick('Home')}>Home</li>
        {selectedOption === 'Home' && (
          <>
            <li>hello</li>
            <li>world</li>
          </>
        )}
        <li onClick={() => handleOptionClick('About')}>About</li>
        {selectedOption === 'About' && (
          <>
            <li>Info</li>
            <li>Center</li>
          </>
        )}
        <li onClick={() => handleOptionClick('Services')}>Services</li>
        {selectedOption === 'Services' && (
          <>
            <li>Call</li>
            <li>Information</li>
          </>
        )}
        <li onClick={() => handleOptionClick('Contact')}>Contact</li>
        {selectedOption === 'Contact' && (
          <>
            <li>Quin Hukui</li>
            <li>02041125842</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default DropdownMenu;






