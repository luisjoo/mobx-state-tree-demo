import {types} from 'mobx-state-tree';
import {TO_DO_STATE} from "../utils";

const ToDo = types.model('ToDo', {
    id: types.string,
    date: types.string,
    title: types.string,
    description: types.string,
    state: TO_DO_STATE.UN_COMPLETE,
})
    .actions(self => ({
        toggleState() {
            if (self.state === TO_DO_STATE.UN_COMPLETE)
                self.state = TO_DO_STATE.COMPLETE;
            else
                self.state = TO_DO_STATE.UN_COMPLETE;
        },
        setDeleted() {
            self.state = TO_DO_STATE.DELETED;
        }
    }));

export default ToDo;
