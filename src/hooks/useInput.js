import { useState } from 'react';

export const useInput = (defaultValue, validationFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(true);
  };

  const handleBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleInputChange,
    handleBlur,
    hasError: didEdit && !valueIsValid,
  };
};
