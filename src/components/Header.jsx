import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../context/myContext";
import Switch from "./Switch";

export const Header = () => {
  const context = useContext(MyContext);

  console.log(context);

  return (
    <HeaderContainer backgroundColor={context.theme ? "yellow" : "red"}>
      <Switch />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  /* background-color: #ce2727; */
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
