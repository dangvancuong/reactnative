import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native'


const TextScreen = () => {

    const [password, setPassword] = useState('');
    return (
        <View>
            <TextInput
                style={style.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            <Text>{password.length < 4 ? 'password must be 4 character' : '' }</Text>
        </View>
    );
};

const style = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 12,
    }
});

export default TextScreen;
