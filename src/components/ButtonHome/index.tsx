import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonHomeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "disabled";
}

const ButtonHome = ({
  variant,
  text,
  ...props
}: ButtonHomeProps) => {
  return (
    <StyledButton {...props} variant={variant}>
      {text}
    </StyledButton>
  );
}

export default ButtonHome;