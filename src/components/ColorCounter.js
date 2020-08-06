import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                onPress={() => onIncrease()}
                title={`Increase Red ${color}`}
            />
            <Button
                onPress={() => onDecrease()}
                title={`Decrease Red ${color}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;
