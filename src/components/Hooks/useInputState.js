import { useState } from "react";

const useInputState = (defaultValue = "") => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return [inputValue, handleChange];
};

export default useInputState;
