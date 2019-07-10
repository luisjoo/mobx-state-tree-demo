import PropTypes from 'prop-types'
import React from 'react';
import ToDoComponent from "./to-do.component";
import {observer} from "mobx-react";

@observer
export default class ToDoListContainer extends React.Component {
    keyExtractor = (item) => item.id + item.title;

    renderItem = (item) => (
        <ToDoComponent
            key={this.keyExtractor(item)}
            item={item}
            id={item.id}
            date={item.date}
            title={item.title}
            state={item.state}
            description={item.description}
        />
    );

    renderList = () => {
        const {toDoList} = this.props;

        return toDoList.map(this.renderItem)
    };

    render = () => (
        <React.Fragment>
            {this.renderList()}
        </React.Fragment>
    );
}

ToDoListContainer.propTypes = {
    toDoList: PropTypes.any.isRequired
};

ToDoListContainer.defaultProps = {
    toDoList: {}
};
