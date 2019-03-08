import React from 'react';
import TaskCard from './Task';

export class TaskList extends React.Component {

    constructor(props) {
        super(props);
    }

    getTasks() {
        const taskModel = [
            {
                "description": "Implement Login View",
                "responsible": {
                    "name": "admin",
                    "email": "admin@gmail.com"
                },
                "status": "Ready",
                "dueDate": 1551070800000
            },
            {
                "description": "Implement Login Controller",
                "responsible": {
                    "name": "admin",
                    "email": "admin@gmail.com"
                },
                "status": "Completed",
                "dueDate": 1551070800000
            },
            {
                "description": "Facebook Integration",
                "responsible": {
                    "name": "admin",
                    "email": "admin@gmail.com"
                },
                "status": "In Progress",
                "dueDate": 1552194000000
            }
        ];

        return taskModel;
    }
    render() {
        const tasks = this.getTasks();
        console.log(tasks);

        return (
            <>
                {tasks.map((task, index) =>
                    <TaskCard key={index}
                          description={task.description}
                          responsible={task.responsible}
                          status={task.status}
                          dueDate={task.dueDate}
                    />
                )}
            </>
        );
    }
}