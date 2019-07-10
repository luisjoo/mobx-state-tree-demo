import PropTypes from 'prop-types'
import React from 'react';
import ToDoComponent from "./to-do.component";
import {observer} from 'mobx-react';

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
        />
    );

    renderItems = () => {
        const {toDoStore} = this.props;
        return toDoStore.filteredToDos.map(this.renderItem)
    };

    render = () => {
        return (
            <React.Fragment>
                {this.renderItems()}
            </React.Fragment>
        )
    }
}

ToDoListContainer.propTypes = {
    toDoStore: PropTypes.any.isRequired
};

ToDoListContainer.defaultProps = {
    toDoStore: {}
};
