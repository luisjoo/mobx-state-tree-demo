import {types} from 'mobx-state-tree';
import {TO_DO_STATE} from "../utils";
import moment from "moment";

export const ToDo = types.model('ToDo', {
    id: types.string,
    title: types.string,
    description: types.string,
    date: types.optional(types.string, moment().format('MMM DD, YYYY @ HH:mm:ss')),
    state: types.optional(types.string, TO_DO_STATE.UN_COMPLETE),
})
    .actions(self => ({
        toggleState: () => {
            if (self.state === TO_DO_STATE.UN_COMPLETE) {
                self.state = TO_DO_STATE.COMPLETE
            } else {
                self.state = TO_DO_STATE.UN_COMPLETE
            }
        },
    }));
