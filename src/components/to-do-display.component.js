import PropTypes from 'prop-types'
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles'
import ToDoListContainer from "./to-do-list-container";
import ToDoStore from '../stores/to-do.store';
import {observer} from 'mobx-react'
import ToDoFilterComponent from "./to-do-filter.component";

@observer
class ToDoDisplayComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render = () => {

        return (
            <View style={styles.whiteContainer}>
                <View>
                    <Text style={[styles.textStyle, styles.title]}>ALL TO DOs</Text>
                </View>

                <ToDoFilterComponent/>

                <View>
                    <ToDoListContainer
                        toDoStore={ToDoStore}
                    />
                </View>
            </View>
        )
    }
}

ToDoDisplayComponent.propTypes = {
    toDoStore: PropTypes.any.isRequired
};

ToDoDisplayComponent.defaultProps = {
    toDoStore: {}
};

export default ToDoDisplayComponent;
