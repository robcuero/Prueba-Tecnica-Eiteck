import { ButtonWrapper } from "./styles";
export interface ButtonProps {
  isDisabled?: boolean;
  message?: string;
  icon?: string;
  variant?: string
}

export const Buttons: React.FC<ButtonProps> = ({
  isDisabled,
  message,
  icon,
  variant
}) => {
  return (
    <ButtonWrapper variant={variant} >
      <button
        disabled={isDisabled}
        className={isDisabled ? "button-primary disabled" : "button-primary"}>
        {icon? <img src={icon} alt="custom-icon" />:''}
        {message}
      </button>
    </ButtonWrapper>
  );
};
