import React from 'react';

const ReusableInput = ({ label, id, error, ...props }) => {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
        // !
      />

      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default ReusableInput;
