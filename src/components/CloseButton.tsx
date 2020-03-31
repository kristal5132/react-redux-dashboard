import React from "react"

export const CloseButton = (props:{onClick:any}) => {
    return (
        <div className="close-wrapper">
            <div className="close-button" onClick={(e) => props.onClick(e)}>
                <div className="in">
                    <div className="close-button-block"/>
                    <div className="close-button-block"/>
                </div>
                <div className="out">
                    <div className="close-button-block"/>
                    <div className="close-button-block"/>
                </div>
            </div>
        </div>
    )
}