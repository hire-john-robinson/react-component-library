import React, { MouseEventHandler } from "react";

export interface ButtonProps {
    children: React.ReactNode,
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>
}