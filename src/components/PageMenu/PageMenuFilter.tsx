import React from "react"
import Select from 'react-select'

interface objMenuFilterTypes {
    text: string,
    value: object[],
    onChange: any
}
export const PageMenuFilter = (props:objMenuFilterTypes) => {
    return (
        <>
            <p className="page-filter__text">
                {props.text}
            </p>
            <div className="custom-select">
                <Select options={props.value} onChange={props.onChange} />
            </div>
        </>
    )
};