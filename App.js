import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Button, Text} from 'react-native';
import BookStore from './BookStore';
import {observer} from 'mobx-react'

// const App = () => (
//     <SafeAreaView style={styles.container}>
//         <ScrollView>
//             <AddToDoComponent/>
//             <ToDoDisplayComponent/>
//         </ScrollView>
//     </SafeAreaView>
// );
//
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d3d3d3",
        height: '100%',
    },
    input: {
        backgroundColor: '#d9d9d9',
        borderWidth: 1,
        borderColor: '#999999',
        fontSize: 20,
        padding: 10,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 20,
        padding: 10,
    }
});

const initialState = {
    title: '',
    author: '',
};

@observer
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    onChange = (key, value) => {
        this.setState({[key]: value});
    };

    addBook = () => {
        BookStore.addBook({...this.state});
        this.setState({...initialState});
    };

    toggleRead = (book) => {
        book.toggleRead()
    };

    renderBooks = () => {
        const {books} = BookStore;

        return books.map((book, index) => (
            <View
                key={index}
                style={styles.input}
            >
                <Text>Title: {book.title}</Text>
                <Text onPress={() => this.toggleRead(book)}>Read: {book.read ? 'YES' : 'NO'}</Text>
            </View>
        ))
    };

    render = () => {
        const {title, author} = this.state;

        return (
            <SafeAreaView>
                <Text style={styles.text}>Title</Text>
                <TextInput
                    value={title}
                    style={styles.input}
                    onChangeText={value => this.onChange('title', value)}
                />
                <Text style={styles.text}>Author</Text>
                <TextInput
                    value={author}
                    style={styles.input}
                    onChangeText={value => this.onChange('author', value)}
                />
                <Button
                    title="Add Book"
                    onPress={this.addBook}
                />

                {this.renderBooks()}
            </SafeAreaView>
        );
    }
}

export default App;
