import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles'
import ToDoListContainer from "./to-do-list-container";

export default class ToDoDisplayComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ToDoList: [],
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render = () => {
        const {ToDoList} = this.state;

        return (
            <View style={styles.whiteContainer}>
                <View>
                    <Text style={[styles.textStyle, styles.title]}>ALL TO DOs</Text>
                </View>
                <View>
                    <ToDoListContainer
                        toDoList={ToDoList}
                    />
                </View>
            </View>
        )
    }
}

