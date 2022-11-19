import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Div = styled.div`
  flex-direction: row-revers;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const NavItem = styled(NavLink)`
  align-items: center;
  padding: 7px 17px;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  color: #030303;
  transition: all 0.2s ease-in-out;
  &.active {
    color: #2da8d8ff;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #d9514eff;
  }
`;

export const HeaderWrapper = styled.header`
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
