import React, { type FC } from 'react';

interface ButtonProps {
  children: string | React.HTMLAttributeAnchorTarget
}

const Button: FC<ButtonProps> = ({ children }) => <div>{children}</div>

export default Button;