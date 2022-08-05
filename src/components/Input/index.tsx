import { StyledInput } from "./styles";

interface InputProps {
  value: string;
  onChange: () => void;
}

const Input = ({value, onChange}: InputProps) => {
  return (
    <StyledInput  value={value} onChange={onChange}/>
  );
}

export default Input;