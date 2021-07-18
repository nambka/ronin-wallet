import React, { ReactNode } from 'react'
import { Button as ButtonUI } from "@chakra-ui/react"
import styled from 'styled-components'

type Props = {
  onClick?: () => void;
  variant?: string;
  type?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
};

const Button = ({onClick, variant, type, width, height, children}: Props) => (
  <StyledButton onClick={onClick} variant={variant} type={type} width={width} height={height}>
    {children}
    <ButtonHelper />
  </StyledButton>
)

export default Button

const ButtonHelper = styled.span`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 5px;
  /* background: linear-gradient(to right, #5ab0f4, #1273ea)!important; */
  transition: opacity 0.2s linear;
`;

const StyledButton = styled(ButtonUI)`
  position: relative;
  z-index: 1;
  /* background: linear-gradient(to right, #1273ea, #1c94f4)!important; */
  background: ${props => props.variant === 'outline' ? "#f7f9fc" : "linear-gradient(to right, #1273ea, #1c94f4)!important"};
  color: ${props => props.variant === 'outline' ? "#1273ea!important" : "#fff"};
  ${ButtonHelper} {
    background: ${props => props.variant === 'outline' ? "#edf1f7" : "linear-gradient(to right, #5ab0f4, #1273ea)!important"};
  }
  &:hover ${ButtonHelper} {
    opacity: 1;
  }
`;