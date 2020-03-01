import React from "react";
import {ModalUser} from "./ModalUser";
import {useSelector} from "react-redux";
import {IUser} from "../../interfaces";
import {Loader} from "../Loader";

export const ModalUsersWrapper = () => {
    const users = useSelector((state:any) => state.users.users);
    const searchInput = useSelector((state: any) => state.messages.searchInput);
    let filteredUsers;
    if (searchInput) {
        filteredUsers = users.filter((user:IUser) => {
                return user.name.toLowerCase().includes(searchInput.toLowerCase());
        });
    }
    return (
        <div className="modal-users custom-scrollbar">
            {users? searchInput ? filteredUsers.map((user:IUser) =>
                    <ModalUser key={user._id} name={user.name} id={user._id} description={user.description}/>
            ):
                users.map((user:IUser) =>
                    <ModalUser key={user._id} name={user.name} id={user._id} description={user.description}/>
                ) : <Loader/>
            }
        </div>
    )
};