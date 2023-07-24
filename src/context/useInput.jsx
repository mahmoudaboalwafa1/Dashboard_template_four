import { useState } from "react";

const useInput = (value, type, placeholder) => {
  const [inputs, setInputs] = useState({
    value: value,
    type: type,
    placeholder: placeholder,
    onChange: (e) => setInputs({ ...inputs, value: e.target.value }),
  });
  return [inputs, setInputs];
};

export default useInput;
