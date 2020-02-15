import React from "react";

interface InputBlockProps {
    type: string,
    placeholder?: string,
    id: string,
    label:string,
    value: string
    onChange: any,
    onBlur: any,
    className: string
}

export const InputBlock = (props:InputBlockProps) => {
    return (
        <div className="form__group">
            {props.placeholder ?
                (<input type={props.type} placeholder={props.placeholder} className="form__field" id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur}/>)
            : (<input type={props.type} className={props.className} id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur}/>)}
            <label className="form__label" htmlFor={props.id}>{props.label}</label>
        </div>
    )
};