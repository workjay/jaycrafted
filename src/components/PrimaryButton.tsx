import { Button, ButtonProps, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 24,
  textTransform: "capitalize",
  fontSize: 18,
  color: theme.palette.common.white,
  lineHeight: 1.5,
}));

export default function PrimaryButton({
  children,
  endIcon,
  variant,
  color,
  ...props
}: ButtonProps) {
  return (
    <StyledButton endIcon={endIcon} variant={variant} color={color} {...props}>
      {children}
    </StyledButton>
  );
}
