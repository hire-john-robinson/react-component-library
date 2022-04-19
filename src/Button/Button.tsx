import React, { FC } from "react";
import clsx from "clsx";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({size = "medium", primary, disabled, children, onClick, ...props}) => {

    return (
        <button type="button" className={clsx({            
            [`u-btn u-btn--${size}`]: true,
            ['u-btn--primary']: primary,
            ['u-btn--disabled']: disabled
        })} disabled={disabled} onClick={onClick} {...props}>
            {children}
        </button>
    )
}

export default Button;