import {types} from 'mobx-state-tree';
import {ToDo} from '../models/to-do.model';
import {getRandNumber} from "../utils";

export default types
    .model('ToDoStore', {
        ToDoList: types.array(ToDo),
    })
    .actions(self => ({
        addTodo: (toDo) => {
            self.ToDoList.push(toDo);
        },
    }))
    .create({
        ToDoList: [
            {
                id: getRandNumber(),
                title: 'Create Example',
                description: 'Create new application using mobx state tree, this to handle the application state',
            }
        ]
    });
