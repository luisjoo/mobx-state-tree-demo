import PropTypes from 'prop-types'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import style from '../styles';
import {TO_DO_STATE} from "../utils";

export default class ToDoComponent extends React.Component {
    onCheckDone = () => {
    };

    onGoToDetails = () => {
    };

    render = () => {
        const {title, date, state} = this.props;

        return (
            <View style={_style.container}>
                <TouchableOpacity
                    style={_style.principalData}
                    onPress={this.onGoToDetails}
                >
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
                </TouchableOpacity>
                <TouchableOpacity
                    style={[_style.state, style.center]}
                    onPress={this.onCheckDone}
                >
                    <Icon
                        size={25}
                        color={style.colors.blue.color}
                        name={state === TO_DO_STATE.COMPLETE ? "minusquareo" : "plussquareo"}
                    />
                </TouchableOpacity>
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
