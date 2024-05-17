import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INC = 25;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            // state.red+action.value > 255 || state.red +action.value<0?state :
            return { ...state, red: state.red + action.value }
        case 'green':
            return { ...state, green: state.green + action.value }
        case 'blue':
            return { ...state, blue: state.blue + action.value }
        default:
            return state
    }
}

const HueScreen = () => {
    // const [red, setRed] = useState(0)
    // const [green, setGreen] = useState(0)
    // const [blue, setBlue] = useState(0)

    // const setColor = (color, change) => {
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change)
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change)
    //             return
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
    //             return
    //         default:
    //             return
    //     }
    // }

    const [color, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = color

    return <View>
        <Text>Hue Screen</Text>

        <ColorCounter
            onMore={() => {
                dispatch({ colorToChange: 'red', value: COLOR_INC })
                // setColor('red', COLOR_INC)
            }}
            onLess={() => {
                dispatch({ colorToChange: 'red', value: -1 * COLOR_INC })
                // setColor('red', -1 * COLOR_INC)
            }}
            color='Red'
        />
        <ColorCounter
            onMore={() => {
                dispatch({ colorToChange: 'green', value: COLOR_INC })
                // setColor('green', COLOR_INC)
            }}
            onLess={() => {
                dispatch({ colorToChange: 'green', value: -1 * COLOR_INC })
                // setColor('green', -1 * COLOR_INC)
            }}
            color='Green'
        />
        <ColorCounter
            onMore={() => {
                dispatch({ colorToChange: 'blue', value: COLOR_INC })
                // setColor('blue', COLOR_INC)
            }}
            onLess={() => {
                dispatch({ colorToChange: 'blue', value: -1 * COLOR_INC })
                // setColor('blue', -1 * COLOR_INC)
            }}
            color='Blue'
        />
        <View style={{ height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
}

const styles = StyleSheet.create({})

export default HueScreen;