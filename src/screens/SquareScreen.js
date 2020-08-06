import React, {useState, useReducer} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red: number ..)
    // action === {colorToChange: red || green}
    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount};
        case 'green':
            return {...state, green: state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);
    //
    // const setColor = (color, change) => {
    //     // color === 'red', 'green', 'blue'
    //     //change === + 15, -15
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //
    //             return;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //
    //             return;
    //         default:
    //             return;
    //     }
    //
    // };


    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
                color="Red" />
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
                color="Blue"
            />
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
                color="Green"
            />
            <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
