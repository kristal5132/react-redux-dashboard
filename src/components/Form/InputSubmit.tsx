import React from "react";

export const InputSubmit = (props:{value:string, id: string}) => {
    return (
        <input type="submit" value={props.value} className="form__submit" id={props.id}/>
    )
};