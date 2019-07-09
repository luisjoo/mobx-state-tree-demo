import PropTypes from 'prop-types'
import React from 'react';
import {FlatList} from 'react-native';
import ToDoComponent from "./to-do.component";

export default class ToDoListContainer extends React.Component {
    keyExtractor = (item) => item.id + item.title;

    renderItem = ({item}) => (
        <ToDoComponent
            item={item}
            id={item.id}
            date={item.date}
            title={item.title}
            state={item.state}
        />
    );

    render = () => {
        const {toDoList} = this.props;

        return (
            <FlatList
                data={toDoList}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                extraData={this.props}
            />
        )
    }
}

ToDoListContainer.propTypes = {
    toDoList: PropTypes.array.isRequired
};

ToDoListContainer.defaultProps = {
    toDoList: []
};
