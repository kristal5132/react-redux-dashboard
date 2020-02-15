import React from "react"

interface pageMenuProps {
    text: string,
    href: string
}
export const PageMenuLink = (props:pageMenuProps) => {
    return (
        <a className="page-links__item" href={props.href}>{props.text}</a>
    )
};