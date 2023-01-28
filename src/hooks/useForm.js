import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formValues, setValues] = useState(initialState);

  const onReset = () => {
    setValues(initialState);
  };

  const onInputChange = ({ target: { name, value } }) => {
    setValues({
      ...formValues,
      [name]: value,
    });
  };

  return { formValues, onInputChange, onReset };
};
