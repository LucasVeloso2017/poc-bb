/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ButtonHTMLAttributes, CSSProperties } from "react";

import * as S from "./styles";

type ButtonProps = {
  variant?: "brand" | "brand-outlined";
  label?: string;
  withIcon?: {
    icon: any;
    position?: "left" | "right";
    onlyIcon?: boolean;
    styles?: CSSProperties;
  };
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant, label, withIcon, ...buttonProps }: ButtonProps) => {
  if (withIcon?.onlyIcon) {
    return (
      <S.Container
        {...buttonProps}
        isBrandVariant={variant === "brand"}
        isBrandOutlinedVariant={variant === "brand-outlined"}
      >
        <img src={withIcon.icon} alt="input-icon" style={withIcon.styles} />
      </S.Container>
    );
  }

  return (
    <S.Container
      {...buttonProps}
      isBrandVariant={variant === "brand"}
      isBrandOutlinedVariant={variant === "brand-outlined"}
    >
      {withIcon && withIcon.position === "left" && (
        <img src={withIcon.icon} alt="input-icon" style={withIcon.styles} />
      )}

      {label && <span>{label}</span>}

      {withIcon && withIcon.position === "right" && (
        <img src={withIcon.icon} alt="input-icon" style={withIcon.styles} />
      )}
    </S.Container>
  );
};

export default Button;
