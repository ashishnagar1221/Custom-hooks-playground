import { useState } from "react";

const useFrom = (initialValue, validate) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (onSumbit) => (e) => {
    e && e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) onSumbit(values);
  };
  return { values, errors, handleChange, handleSubmit, setValues };
};

export default useFrom;
