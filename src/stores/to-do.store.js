import {observable, action, computed} from "mobx";
import {getRandNumber, TO_DO_FILTER, TO_DO_STATE} from "../utils";

class ToDoStore {
    @observable
    ToDoList = [];
    @observable
    Filter = TO_DO_FILTER.ALL;

    @action
    addToDo = (todo) => {
        this.ToDoList.push({
            ...todo,
            id: getRandNumber(),
            date: new Date().toDateString(),
            state: TO_DO_STATE.UN_COMPLETE,
        })
    };

    @action
    toggleState = (todo, state) => {
        const index = this.ToDoList.indexOf(todo);
        let newState = '';

        if (index === -1) return null;

        if (state === TO_DO_STATE.COMPLETE)
            newState = TO_DO_STATE.UN_COMPLETE;
        else
            newState = TO_DO_STATE.COMPLETE;

        this.ToDoList[index].state = newState;
    };

    @action
    setFilter(Filter) {
        this.Filter = Filter;
    }

    @computed
    get filteredToDos() {
        return this.ToDoList.filter(toDo => {
            if (this.Filter === TO_DO_FILTER.ALL)
                return toDo;
            if (toDo.state === this.Filter)
                return toDo;
        });
    }
}

const store = new ToDoStore();
export default store;
