import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.view_1}></View>
            <View style={styles.view2Parent}>
                <View style={styles.view_2}></View>
            </View>
            <View style={styles.view_3}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200,
    },
    view2Parent: {
        height: 200,
        justifyContent: 'flex-end'
    },
    view_1: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
    view_2: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        alignSelf: 'flex-end',
    },
    view_3: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
    },
});

export default BoxScreen;
