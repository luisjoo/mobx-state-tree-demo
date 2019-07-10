import PropTypes from 'prop-types'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import style from '../styles';
import {TO_DO_STATE} from "../utils";

export default class ToDoComponent extends React.Component {
    onToggleState = () => {
        const {item} = this.props;

        item.toggleState();
    };

    setDeleted = () => {
        const {item} = this.props;

        item.setDeleted();
    };

    renderNotDeleted = () => {
        const {state} = this.props;
        if (state === TO_DO_STATE.DELETED)
            return null;

        return (
            <React.Fragment>
                <TouchableOpacity onPress={this.onToggleState}>
                    <Icon
                        size={20}
                        color={style.colors.blue.color}
                        name={state === TO_DO_STATE.COMPLETE ? "minuscircle" : "pluscircle"}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.setDeleted}>
                    <Icon
                        size={20}
                        color={style.colors.blue.color}
                        name="swap"
                    />
                </TouchableOpacity>
            </React.Fragment>
        )
    };

    renderDeleted = () => {
        const {state} = this.props;
        if (state === TO_DO_STATE.DELETED) {
            return (
                <TouchableOpacity onPress={this.onToggleState}>
                    <Icon
                        size={20}
                        color={style.colors.blue.color}
                        name="reload1"
                    />
                </TouchableOpacity>
            );
        }

        return null;
    };

    render = () => {
        const {title, date} = this.props;

        return (
            <View style={_style.container}>
                <View style={_style.principalData}>
                    <View style={[style.marginVertical5, style.size16]}>
                        <Text style={style.textStyle}>
                            {title}
                        </Text>
                    </View>
                    <View style={[style.marginVertical5, style.size16]}>
                        <Text style={style.textStyle}>
                            {date}
                        </Text>
                    </View>
                </View>
                <View style={[_style.state, style.center]}>
                    {this.renderNotDeleted()}
                    {this.renderDeleted()}
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    principalData: {
        width: '85%',
    },
    state: {
        width: '15%'
    },
    size16: {
        fontSize: 16
    }
});

ToDoComponent.propTypes = {
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

ToDoComponent.defaultProps = {
    date: '',
    id: '',
    item: {},
    state: '',
    title: ''
};
