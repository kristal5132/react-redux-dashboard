import React, {FormEvent, useState, useContext} from "react"
import {Context} from "../Context";
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const ProjectCreateModalForm = () => {
    const {addProject} = useContext(Context);
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [cost, setCost] = useState("");
    const [deadline, setDeadline] = useState("");
    const [assigned, setAssigned] = useState("");

    function onSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const sendData = async () => {

            let data = {
                "title": title,
                "company": company,
                "cost": cost,
                "deadline": deadline,
                "assigned": assigned
            };

            let requestOptions: RequestInit = {
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU"
                },
                redirect: 'follow'
            };
            const response = await axios.post('/api/projects/', data, requestOptions);
            const result = response.data;
            console.log(response);

            addProject(result);
        };
        sendData();
    }


    return (
        <form className="project-form" onSubmit={onSubmit}>
            <div className="form__group">
                <input type="text" id="modal-form__title" className="form__field" placeholder="Title"
                       value={title} onChange={e => setTitle(e.target.value)}/>
                <label htmlFor="modal-form__title" className="form__label">Title</label>
            </div>
            <div className="form__group">
                <input type="text" id="modal-form__company" className="form__field" placeholder="Company"
                       value={company} onChange={e => setCompany(e.target.value)}/>
                <label htmlFor="modal-form__company" className="form__label">Company</label>
            </div>
            <div className="form__group">
                <input type="text" id="modal-form__cost" className="form__field" placeholder="Cost"
                       value={cost} onChange={e => setCost(e.target.value)}/>
                <label htmlFor="modal-form__cost" className="form__label">Cost</label>
            </div>
            <div className="form__group">
                <input type="text" id="modal-form__deadline" className="form__field" placeholder="Deadline"
                       value={deadline} onChange={e => setDeadline(e.target.value)}/>
                <label htmlFor="modal-form__deadline" className="form__label">Deadline</label>
            </div>
            <div className="form__group">
                <input type="text" id="modal-form__assigned" className="form__field" placeholder="Assigned"
                       value={assigned} onChange={e => setAssigned(e.target.value)}/>
                <label htmlFor="modal-form__assigned" className="form__label">Assigned</label>
            </div>
            <input type="submit" className="form__submit" value="Create project"/>
        </form>
    )
}