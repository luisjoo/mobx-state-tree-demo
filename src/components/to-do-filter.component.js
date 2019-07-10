import React from 'react';
import {Button, View} from "react-native";
import {TO_DO_FILTER} from "../utils";
import ToDoStore from '../stores/to-do.store';
import {observer} from "mobx-react";

@observer
class ToDoFilterComponent extends React.Component {
    onSetFilter = (filter) => ToDoStore.setFilter(filter);

    render = () => {
        const {Filter} = ToDoStore;
        const selectedButton = "#cb6800";

        return (
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button
                    title="All"
                    color={Filter === TO_DO_FILTER.ALL ? selectedButton : null}
                    onPress={() => this.onSetFilter(TO_DO_FILTER.ALL)}
                />
                <Button
                    title="To Do"
                    color={Filter === TO_DO_FILTER.UN_COMPLETE ? selectedButton : null}
                    onPress={() => this.onSetFilter(TO_DO_FILTER.UN_COMPLETE)}
                />
                <Button
                    title="Done"
                    color={Filter === TO_DO_FILTER.COMPLETE ? selectedButton : null}
                    onPress={() => this.onSetFilter(TO_DO_FILTER.COMPLETE)}
                />
                <Button
                    title="Deleted"
                    color={Filter === TO_DO_FILTER.DELETED ? selectedButton : null}
                    onPress={() => this.onSetFilter(TO_DO_FILTER.DELETED)}
                />
            </View>
        )
    }
}

export default ToDoFilterComponent;
