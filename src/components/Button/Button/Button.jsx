import React from "react";
import { SIZES, VARIANTS, StyledButton } from "./ButtonStyle";

export default function Button({
  size,
  variant,
  onClick,
  disabled = false,
  type = "button",
  children,
}) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      type={type}
      disabled={disabled}
      size={sizeStyle}
      variant={variantStyle}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
