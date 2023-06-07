import React from "react";
import { StyledTabButton } from "./TabButtonStyle";

export default function TabButton({ active, onClick, children }) {
  return (
    <StyledTabButton type="button" onClick={onClick} active={active}>
      {children}
    </StyledTabButton>
  );
}
