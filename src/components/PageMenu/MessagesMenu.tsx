import React from "react"
import {PageMenuLink} from "./PageMenuLink";
import {PageMenuFilter} from "./PageMenuFilter";
import {ValueType} from "react-select";

export const MessagesMenu = () => {
    const objMenuItems = [
        {
            text: `Inbox`,
            href: "#"
        },
        {
            text: `Sent`,
            href: "#"
        },
        {
            text: `Trash`,
            href: "#"
        }
    ];

    const menuFilterText:string = "Filter messages";
    const menuFilterOptions:object[] = [
        { value: 'date', label: 'Date' },
        { value: 'necessary', label: 'Necessary' },
        { value: 'pointer', label: 'Pointer' }
    ];

    const onChange = (value:ValueType<any>) => console.log(value);


    return (
        <section className="page-menu">
            <div className="page-links">
                {objMenuItems.map(obj => {
                    return (
                        <PageMenuLink key={obj.text} text={obj.text} href={obj.href}/>
                    )
                })}
            </div>
            <div className="page-filter">
                <PageMenuFilter key={menuFilterText} text={menuFilterText} value={menuFilterOptions} onChange={onChange}/>
            </div>
        </section>
    )
};