import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import AddToDoComponent from "./src/components/add-to-do.component";
import ToDoDisplayComponent from "./src/components/to-do-display.component";

console.disableYellowBox = true;

const App = () => (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <AddToDoComponent/>
            <ToDoDisplayComponent/>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d3d3d3",
        height: '100%',
    }
});

export default App;
