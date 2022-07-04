interface ITask {
    id?: number;
    user_id?: number;
    title: string;
    task: string;
    createdAt: Date;
    status: string;
}

export default ITask;