import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from '../../redux/auth/authSelectors';
import * as authOperation from '../../redux/auth/authOperation';
import { ButtonLogOut } from './AppBar.styled';
import { DivMenu } from './AppBar.styled';
export default function UserName() {
  const nameUser = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <DivMenu>
      <p>{nameUser.name}</p>
      <ButtonLogOut
        type="button"
        onClick={() => dispatch(authOperation.logOut())}
      >
        LogOut
      </ButtonLogOut>
    </DivMenu>
  );
}
