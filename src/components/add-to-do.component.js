import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from '../styles';

export default class AddToDoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
        }
    }

    onInputChange = (name, data) => this.setState({
        [name]: data,
    });

    addToDo = () => {

    };

    clearInputs = () => {
        this.setState({
            title: '',
            description: '',
        })
    };

    render = () => {
        const {title, description} = this.state;

        return (
            <View style={styles.whiteContainer}>
                <View style={styles.marginVertical10}>
                    <Text style={styles.textStyle}>Title:</Text>
                    <TextInput
                        value={title}
                        onChangeText={data => this.onInputChange('title', data)}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.marginVertical10}>
                    <Text style={styles.textStyle}>Description:</Text>
                    <TextInput
                        onChangeText={data => this.onInputChange('description', data)}
                        style={[styles.textInput, styles.multilineHeight]}
                        value={description}
                        numberOfLines={5}
                        multiline
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.successButton]}
                        onPress={this.addToDo}
                    >
                        <Text style={[styles.textStyle, styles.colors.white]}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={this.clearInputs}
                    >
                        <Text style={[styles.textStyle, styles.colors.blue]}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
