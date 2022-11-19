import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
export const HeaderWrapper = styled.header`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
export const DivMenu = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  align-items: center;
`;
export const ButtonLogOut = styled.button`
  padding: 4px;
  margin: 5px;
  font-size: 14px;
  border-radius: 10px;

  outline: 0;
  text-decoration: none;

  cursor: pointer;
  :hover {
    color: red;
    background-color: orange;
    outline: 0;
    text-decoration: none;
  }
`;
