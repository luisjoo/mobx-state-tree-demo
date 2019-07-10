import {types} from 'mobx-state-tree';
import ToDo from '../models/to-do.model';
import {getRandNumber, TO_DO_FILTER} from "../utils";

const ToDoStore = types.model('ToDoStore', {
    ToDoList: types.array(ToDo),
    Filter: TO_DO_FILTER.ALL,
})
    .views(self => ({
        get FilteredToDoList() {
            return self.ToDoList.filter(toDo => {
                if (self.Filter === TO_DO_FILTER.ALL)
                    return toDo;
                if (toDo.state === self.Filter)
                    return toDo;
            });
        }
    }))
    .actions(self => ({
        addTodo(todo) {
            const obj = {
                ...todo,
                id: getRandNumber(),
                date: new Date().toDateString(),
            };

            self.ToDoList.push(obj);
        },
        setFilter(filter) {
            self.Filter = filter;
        }
    }))
    .create({
        ToDoList: []
    });

export default ToDoStore;
