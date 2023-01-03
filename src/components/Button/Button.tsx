import React from "react";

export interface ButtonProps {
  label: string;
  children: string
}

const Button = (props: ButtonProps) => {
  return <button>{props.label || props.children}</button>;
};

export default Button;