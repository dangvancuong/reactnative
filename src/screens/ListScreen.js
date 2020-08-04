import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'name', key: '1'},
        {name: 'name', key: '2'},
        {name: 'name', key: '3'},
        {name: 'name', key: '4'},
        {name: 'name', key: '5'},
        {name: 'name', key: '6'},
        {name: 'name', key: '7'},
        {name: 'name', key: '8'},
        {name: 'name', key: '9'},
        {name: 'name', key: '10'},
        {name: 'name', key: '11'},
    ];

    return <FlatList
        keyExtractor={(friend) => friend.key}
        data={friends}
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} _ key {item.key}</Text>
        }}
    />;
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;

