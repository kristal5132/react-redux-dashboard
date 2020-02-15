import React from "react"
import {Filter} from "../Filter";

interface objMenuFilterTypes {
    text: string,
    value: string[]
}
export const PageMenuFilter = (props:objMenuFilterTypes) => {

    return (
        <>
            <p className="page-filter__text">
                {props.text}
            </p>
            <div className="custom-select">
                <select>
                    {props.value.map(item => {
                        return (
                            <Filter key={item} value={item}/>
                        )
                    })}
                </select>
            </div>
        </>
    )
}