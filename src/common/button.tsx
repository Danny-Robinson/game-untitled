import classnames from "classnames";
import React from "react";

interface OwnProps {
  className?: string;
  danger?: boolean;
  disabled?: boolean;
  link?: boolean;
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  transparent?: boolean;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
  url?: string | null;
  target?: string;
  onClick?(event?: React.MouseEvent<HTMLButtonElement>): void;
}

export type ButtonProps = OwnProps;

class Button extends React.PureComponent<ButtonProps> {
  public render() {
    const {
      className = "",
      danger,
      disabled,
      link,
      primary,
      secondary,
      onClick,
      id,
      type,
      children
    } = this.props;

    return (
      <button
        id={id}
        type={type ? type : "button"}
        onClick={!disabled ? onClick : undefined}
        className={classnames([
          "app-button",
          className,
          {
            "btn-danger": danger,
            "btn-link": link,
            "btn-primary": primary,
            "btn-secondary": secondary
          }
        ])}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

export default Button;
