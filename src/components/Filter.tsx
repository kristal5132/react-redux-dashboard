import React from "react"

export const Filter = (props:{key:string, value:string}) => {
    return (
        <option value={props.value}>{props.value}</option>
    )
};