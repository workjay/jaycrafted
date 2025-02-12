import { Container, ContainerProps } from "@mui/material";

export default function BodyContainer({ children }: ContainerProps) {
  return <Container maxWidth="lg">{children}</Container>;
}
