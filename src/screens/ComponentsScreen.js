// part 1
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

// part 2
const ComponentScreen = () => {
    const greeting = <Text> Hello all! </Text>
    return (
        <View>
            <Text style={styles.textStyle}>123123</Text>
            {greeting}
        </View>
    )
};

//part 3
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

// part 4
export default ComponentScreen;
