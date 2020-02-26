export interface IUser {
    position: string,
    description: string,
    phone: string,
    address: string,
    organization: string,
    _id: string,
    name: string,
    email: string
}
export interface IProject {
    timeSpent: number,
    progress: number,
    status: string,
    _id: string,
    title: string,
    company: string,
    cost: string,
    deadline: string,
    assigned: IUser,
    created_at: string,
    updated_at: string
}

export interface IThread {
    users: [{_id:string, name: string}],
    _id: string,
    created_at: string,
    updated_at: string,
    message: {
        _id: string,
        thread: string,
        body: string
    }
}