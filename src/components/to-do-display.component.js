import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react'
import {onSnapshot} from 'mobx-state-tree'
import styles from '../styles'
import ToDoStore from '../stores/to-do.store';
import ToDoListContainer from "./to-do-list-container";

@observer
export default class ToDoDisplayComponent extends React.Component {
    constructor(props) {
        super(props);

        const emptyMethod = () => null;

        this.state = {
            ToDoList: [],
        };

        this.cleanToDoSubscription = emptyMethod;
    }

    componentDidMount() {
        this.initState();
        this.snapShotListener();
    }

    componentWillUnmount() {
        this.cleanToDoSubscription();
    }

    initState = () => {
        const {ToDoList} = ToDoStore;

        this.setState({
            ToDoList
        })
    };

    snapShotListener = () => {
        this.cleanToDoSubscription = onSnapshot(ToDoStore, () => this.initState());
    };

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

