import React, { useState } from "react";

// This component has a text input, submit button and shows "You typed: ..."
function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // stop page refresh
    setSubmittedText(inputValue);
  };

  return (
    <div className="simple-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Show the message after submission */}
      {submittedText && <p>You typed: {submittedText}</p>}
    </div>
  );
}

export default SimpleForm;
