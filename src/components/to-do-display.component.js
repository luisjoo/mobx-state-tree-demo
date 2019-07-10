import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles'
import ToDoListContainer from "./to-do-list-container";
import ToDoStore from '../stores/to-do.store';
import ToDoFilterComponent from "./to-do-filter.component";
import {observer} from "mobx-react";

@observer
export default class ToDoDisplayComponent extends React.Component {
    render = () => {
        const {FilteredToDoList} = ToDoStore;

        return (
            <View style={styles.whiteContainer}>
                <View>
                    <Text style={[styles.textStyle, styles.title]}>ALL TO DOs</Text>
                </View>

                <ToDoFilterComponent/>

                <View>
                    <ToDoListContainer
                        toDoList={FilteredToDoList}
                    />
                </View>
            </View>
        )
    }
}

