import React from "react"
import {PageMenuLink} from "./PageMenuLink";
import {PageMenuFilter} from "./PageMenuFilter";
import {ValueType} from "react-select";
import {changeFilter} from "../../store/filter/actions";
import {useDispatch} from "react-redux";

export const PageMenu = (props:{projects:number}) => {
    const objMenuItems = [
        {
            text: `All Projects (${props.projects})`,
            href: "#"
        },
        {
            text: `Workflow`,
            href: "#"
        }
    ];

    const menuFilterText:string = "Show projects";
    const menuFilterOptions:object[] = [
        { value: 'all', label: 'All' },
        { value: 'completed', label: 'Completed' },
        { value: 'development', label: 'Development' },
        { value: "queued", label: "Queued"},
        { value: "testing", label: "Testing"}
    ];

    //TODO: add filter for messages later

    const onChange = (value:ValueType<any>) => dispatch(changeFilter(value));
    const dispatch = useDispatch();

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