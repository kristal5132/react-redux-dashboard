import React from "react";

export const InputError = (props:{touched: boolean | undefined; message: string | undefined}) => {
    /*if (!props.touched) {
        return <div className="form__message">&nbsp;</div>
    }*/
    if (props.touched || props.message) {
        return <div className="form__message">{props.message}</div>
    }
    return (<></>)
};