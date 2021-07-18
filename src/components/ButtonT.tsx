import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Props = {
  label: string;
  faIcon: IconProp;
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
};

const ButtonT = ({label, faIcon, onClick, disabled, children}: Props) => (
  <StyledButton onClick={onClick} >
      {children}
      <Icon icon={faIcon} />
      <Label>{label}</Label>
  </StyledButton>
)

export default ButtonT

const Icon = styled(FontAwesomeIcon)`
  padding: 10px;
  border-radius: 6px;
  font-size: 2.75rem;
`;

const Label = styled.div`
  margin-top: 5px;
  color: #123;
  font-size: 0.8rem;
  font-weight: 600;
`;

const StyledButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
  height: 75px;
  color: #2287ec;
  cursor: pointer;
	&:hover ${Icon} {
    background-color: #edf1f7;
  }
	&:disabled ${Label} {
    color: #8dc9f9;
  }

`;